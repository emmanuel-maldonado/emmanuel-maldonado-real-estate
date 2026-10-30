"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

import { inquiryEndpoint } from "../../inquiry-endpoint";

export default function HomeValueForm() {
  const startedAt = useRef(0);
  useEffect(() => { startedAt.current = Date.now(); }, []);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!inquiryEndpoint || status === "sending") return;
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const fields = new FormData(form);
    const email = String(fields.get("email") ?? "").trim();
    const phone = String(fields.get("phone") ?? "").trim();

    const name = String(fields.get("name") ?? "").trim();
    const propertyAddress = String(fields.get("propertyAddress") ?? "").trim();
    const timeline = String(fields.get("timeline") ?? "").trim();
    const note = String(fields.get("note") ?? "").trim();

    if (!name || !propertyAddress) {
      setStatus("error");
      setMessage("Please add your name and property address.");
      return;
    }

    if (!email && !phone) {
      setStatus("error");
      setMessage("Please add a phone number or email address.");
      return;
    }

    try {
      const response = await fetch(inquiryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(fields.entries()), name, email, phone, propertyAddress, timeline, note,
          interest: "Selling a home",
          message: `Home value request. Property address: ${propertyAddress}. Timeline: ${timeline || "not specified"}. Note: ${note || "none"}`,
          startedAt: startedAt.current }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Your message could not be sent.");
      form.reset();
      startedAt.current = Date.now();
      setStatus("success");
      setMessage("Thank you. Your message was sent, and Emmanuel will follow up personally.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Your message could not be sent. Please call or try again.");
    }
  }

  return <form className="value-form" onSubmit={submit} aria-label="Home value request">
    <h2>Request your home value</h2>
    <p className="form-sub">Share a few details and I will follow up personally, usually with a few questions about your home&apos;s condition and updates.</p>
    <label>Name<input type="text" name="name" required autoComplete="name" placeholder="Your name" /></label>
    <div className="form-row">
      <label>Email <small>Phone or email required</small><input type="email" name="email" autoComplete="email" placeholder="you@example.com" /></label>
      <label>Phone <small>Phone or email required</small><input type="tel" name="phone" autoComplete="tel" placeholder="(757) 555-0123" /></label>
    </div>
    <label>Property address<input type="text" name="propertyAddress" required autoComplete="street-address" placeholder="Street, city, ZIP" /></label>
    <label>When are you thinking of selling?
      <select name="timeline" defaultValue=""><option value="" disabled>Select one</option><option>As soon as possible</option><option>Within 3 months</option><option>3 to 6 months</option><option>6 to 12 months</option><option>Just curious about my value</option></select>
    </label>
    <label>Anything I should know? <small>Optional</small><textarea name="note" rows={3} placeholder="Recent updates, repairs, or questions"></textarea></label>
    <label className="contact-honeypot" aria-hidden="true">Company website<input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
    <button className="button button-gold" type="submit" disabled={status === "sending" || !inquiryEndpoint}>{status === "sending" ? "Sending…" : "Get my free market analysis"}</button>
    <p className={`form-status ${status}`} role="status">{message || "Your information is used only to respond to your request. This is a comparable-sales market analysis, not an appraisal."}</p>
  </form>;
}
