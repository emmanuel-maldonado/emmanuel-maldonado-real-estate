"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { openHouseSigninEndpoint } from "../inquiry-endpoint";

const HEARD = ["Drove by / signs", "Facebook", "Instagram", "Zillow / Realtor.com / other site", "Friend or neighbor", "My agent", "Other"];
const TIMEOUT_MS = 8000;

type Status = "queued" | "sent" | "not-accepted";
type SignIn = {
  id: string; time: string; submittedAt: string; startedAt: number;
  name: string; phone: string; email: string; agent: "" | "Yes" | "No"; who: string; heard: string; consent: "Yes";
  status: Status; attempts: number;
};

const storageKey = (slug: string) => `oh_signins_${slug}`;
function load(slug: string): SignIn[] {
  try { const parsed = JSON.parse(localStorage.getItem(storageKey(slug)) || "[]"); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
}
function save(slug: string, list: SignIn[]) {
  try { localStorage.setItem(storageKey(slug), JSON.stringify(list)); } catch { /* storage full or blocked: nothing else we can do on this device */ }
}
function update(slug: string, id: string, patch: Partial<SignIn>) {
  save(slug, load(slug).map((item) => item.id === id ? { ...item, ...patch } : item));
}
const newId = () => (typeof crypto !== "undefined" && "randomUUID" in crypto) ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;

/** Sends one sign-in. Returns the new status; network errors, timeouts, 403/429/5xx stay queued for retry. */
async function send(slug: string, item: SignIn): Promise<Status> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
  try {
    const response = await fetch(openHouseSigninEndpoint, {
      method: "POST", mode: "cors", credentials: "omit", cache: "no-store", referrerPolicy: "no-referrer", signal: controller.signal,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ openHouse: slug, name: item.name, phone: item.phone, email: item.email, realtor: item.agent, realtorName: item.agent === "Yes" ? item.who : "", heard: item.heard, consent: true, companyWebsite: "", startedAt: item.startedAt, submittedAt: item.submittedAt }),
    });
    if (response.ok) return "sent";
    if (response.status === 400 || response.status === 410 || response.status === 413) return "not-accepted";
    return "queued";
  } catch {
    return "queued";
  } finally { clearTimeout(timer); }
}

let flushing = false;
async function flush(slug: string) {
  if (flushing || typeof navigator !== "undefined" && navigator.onLine === false) return;
  flushing = true;
  try {
    for (const item of load(slug).filter((entry) => entry.status === "queued")) {
      const status = await send(slug, item);
      update(slug, item.id, { status, attempts: (item.attempts || 0) + 1 });
      if (status === "queued") break; // still unreachable; try again later
    }
  } finally { flushing = false; }
}

function csv(list: SignIn[]) {
  const header = ["Time", "Name", "Phone", "Email", "Working with a Realtor", "Realtor name", "How heard", "Consent", "Sent to CRM"];
  const q = (value: unknown) => { let v = String(value ?? ""); if (/^[=+\-@\t\r]/.test(v)) v = "'" + v; return '"' + v.replace(/"/g, '""') + '"'; };
  const label: Record<Status, string> = { sent: "Yes", queued: "Not yet (waiting to send)", "not-accepted": "No (enter by hand)" };
  return [header.map(q).join(",")].concat(list.map((r) => [r.time, r.name, r.phone, r.email, r.agent, r.who, r.heard, r.consent, label[r.status]].map(q).join(","))).join("\r\n");
}

export default function SignInForm({ slug, street }: { slug: string; street: string }) {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const startedAt = useRef(0);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [ready, setReady] = useState(false);
  const [agent, setAgent] = useState<"" | "Yes" | "No">("");
  const [error, setError] = useState("");
  const [thanks, setThanks] = useState(false);
  const [hostLink, setHostLink] = useState(false);
  const [admin, setAdmin] = useState<SignIn[] | null>(null);

  const refreshAdmin = useCallback(() => setAdmin((open) => open ? load(slug) : open), [slug]);
  const openAdmin = useCallback(() => setAdmin(load(slug)), [slug]);

  useEffect(() => {
    startedAt.current = Date.now();
    const hydrated = setTimeout(() => { setReady(true); setHostLink(new URLSearchParams(window.location.search).get("host") === "1"); }, 0);
    void flush(slug).then(refreshAdmin);
    const retry = () => void flush(slug).then(refreshAdmin);
    const interval = setInterval(retry, 60_000);
    window.addEventListener("online", retry);
    const keys = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "a") { event.preventDefault(); openAdmin(); }
      if (event.key === "Escape") setAdmin(null);
    };
    document.addEventListener("keydown", keys);
    return () => { clearTimeout(hydrated); clearInterval(interval); window.removeEventListener("online", retry); document.removeEventListener("keydown", keys); };
  }, [slug, openAdmin, refreshAdmin]);

  function reset() {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    formRef.current?.reset(); setAgent(""); setThanks(false); setError("");
    startedAt.current = Date.now(); window.scrollTo(0, 0); nameRef.current?.focus();
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready) return;
    const form = event.currentTarget; const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const name = value("name"), phone = value("phone"), email = value("email");
    if (!name) { setError("Please enter your name."); nameRef.current?.focus(); return; }
    if (phone && (/[^0-9()+.\-\s]/.test(phone) || phone.replace(/\D/g, "").length < 7)) { setError("Please check the phone number."); (form.elements.namedItem("phone") as HTMLInputElement)?.focus(); return; }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { setError("Please check the email address."); (form.elements.namedItem("email") as HTMLInputElement)?.focus(); return; }
    if (value("companyWebsite")) { setThanks(true); return; } // bot trap: pretend success, save nothing
    const now = new Date();
    const item: SignIn = {
      id: newId(), time: now.toLocaleString(), submittedAt: now.toISOString(), startedAt: startedAt.current,
      name, phone, email, agent, who: agent === "Yes" ? value("who") : "", heard: HEARD.includes(value("heard")) ? value("heard") : "", consent: "Yes",
      status: "queued", attempts: 0,
    };
    save(slug, [...load(slug), item]);
    setError(""); setThanks(true);
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(reset, 4000);
    void flush(slug).then(refreshAdmin);
  }

  function download() {
    const blob = new Blob(["\ufeff" + csv(load(slug))], { type: "text/csv" });
    const url = URL.createObjectURL(blob); const link = document.createElement("a");
    link.href = url; link.download = `open-house-${slug}-signins-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  function clearAll() {
    const count = load(slug).length;
    if (!count) { alert("No entries to clear."); return; }
    if (confirm(`Delete all ${count} sign-ins from this device? Download the CSV first.`) && confirm("Are you sure? This cannot be undone.")) { localStorage.removeItem(storageKey(slug)); openAdmin(); }
  }
  const startHold = () => { holdTimer.current = setTimeout(openAdmin, 2000); };
  const endHold = () => { if (holdTimer.current) clearTimeout(holdTimer.current); };
  const counts = admin ? { total: admin.length, sent: admin.filter((r) => r.status === "sent").length, queued: admin.filter((r) => r.status === "queued").length, rejected: admin.filter((r) => r.status === "not-accepted").length } : null;

  return <>
    <main className="oh-panel">
      <h2>Welcome! Please sign in</h2>
      <div className="oh-sub">Thanks for stopping by. It only takes a moment.</div>
      <form ref={formRef} method="post" action="#" autoComplete="off" noValidate onSubmit={submit}>
        <label htmlFor="oh-name">Name <span className="oh-req">*</span></label>
        <input ref={nameRef} id="oh-name" name="name" type="text" required maxLength={120} autoComplete="name" />
        <div className="oh-row">
          <div><label htmlFor="oh-phone">Phone</label><input id="oh-phone" name="phone" type="tel" inputMode="tel" maxLength={40} autoComplete="tel" /></div>
          <div><label htmlFor="oh-email">Email</label><input id="oh-email" name="email" type="email" inputMode="email" maxLength={160} autoComplete="email" /></div>
        </div>
        <fieldset className="oh-fieldset">
          <legend>Working with a Realtor?</legend>
          <div className="oh-yn">
            {(["Yes", "No"] as const).map((option) => <label key={option} className={agent === option ? "is-on" : ""}><input type="radio" name="agent" value={option} checked={agent === option} onChange={() => setAgent(option)} /><span>{option}</span></label>)}
          </div>
        </fieldset>
        {agent === "Yes" && <div><label htmlFor="oh-who">If yes, who?</label><input id="oh-who" name="who" type="text" maxLength={120} /></div>}
        <label htmlFor="oh-heard">How did you hear about it?</label>
        <select id="oh-heard" name="heard" defaultValue=""><option value="">Select…</option>{HEARD.map((option) => <option key={option}>{option}</option>)}</select>
        <label className="oh-trap" aria-hidden="true">Company website<input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
        <div className="oh-consent">By signing in you agree that Manny may contact you about real estate. Your info is never sold.</div>
        <div className="oh-err" role="alert" aria-live="assertive">{error}</div>
        <button className="oh-go" type="submit" disabled={!ready}>Sign in</button>
      </form>
      <footer className="oh-foot">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="oh-hs" src="/open-house/manny-headshot-160.webp" width={62} height={62} alt="Emmanuel Maldonado" />
        <div className="oh-who"><b>Emmanuel &quot;Manny&quot; Maldonado</b><br />Real Estate Agent &amp; Property Manager · Call or text 757-672-6065<br /><span className="oh-es">Y también hablo español</span></div>
        <div className="oh-logo" onMouseDown={startHold} onTouchStart={startHold} onMouseUp={endHold} onMouseLeave={endHold} onTouchEnd={endHold} onTouchCancel={endHold}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/open-house/salt-light-logo-white-240.png" width={62} height={58} alt="Salt &amp; Light Real Estate" draggable={false} />
        </div>
      </footer>
      <div className="oh-disc">Nina Olander &amp; Emmanuel &quot;Manny&quot; Maldonado · Rooted Residential, 4505 Colley Ave, Norfolk, VA 23508 · 757-500-2412 · Equal Housing Opportunity</div>
      {hostLink && <button type="button" className="oh-hostlink" onClick={openAdmin}>Host tools</button>}
    </main>
    {thanks && <div className="oh-thanks" role="status" onClick={reset}>
      <h1>Thanks for stopping by!</h1><div className="oh-rule" />
      <p>Enjoy the tour. Manny is happy to answer any questions.</p>
      <p className="oh-gracias">¡Gracias por visitarnos!</p>
    </div>}
    {admin && counts && <div className="oh-admin" role="dialog" aria-label="Host tools">
      <h3>Sign-ins on this device: {counts.total}</h3>
      <p>{street} · Sent to CRM: {counts.sent} · Waiting to send: {counts.queued}{counts.rejected ? ` · Not accepted (enter by hand): ${counts.rejected}` : ""}</p>
      <p className="oh-admin-note">Saved on this device only (browser storage). Waiting entries retry automatically. Download the CSV before closing or clearing.</p>
      <div className="oh-btns">
        <button type="button" className="gold" onClick={download}>Download CSV</button>
        <button type="button" className="white" onClick={() => void flush(slug).then(openAdmin)}>Retry sending now</button>
        <button type="button" className="red" onClick={clearAll}>Clear all entries</button>
        <button type="button" className="white" onClick={() => setAdmin(null)}>Close</button>
      </div>
      <table><thead><tr><th>#</th><th>Time</th><th>Name</th><th>Phone</th><th>Email</th><th>Realtor?</th><th>Who</th><th>Heard via</th><th>CRM</th></tr></thead>
        <tbody>{admin.map((r, i) => <tr key={r.id}><td>{i + 1}</td><td>{r.time}</td><td>{r.name}</td><td>{r.phone}</td><td>{r.email}</td><td>{r.agent}</td><td>{r.who}</td><td>{r.heard}</td><td>{r.status === "sent" ? "Sent" : r.status === "queued" ? "Waiting" : "Not accepted"}</td></tr>)}</tbody>
      </table>
    </div>}
  </>;
}
