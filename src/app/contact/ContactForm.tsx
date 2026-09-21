"use client";

import { FormEvent, useRef, useState } from "react";

const inquiryEndpoint = "https://salt-light-crm--salt-light-private-crm.us-central1.hosted.app/api/public/website-inquiry";

export default function ContactForm() {
  const startedAt = useRef(Date.now());
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!inquiryEndpoint || status === "sending") return;
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const fields = new FormData(form);

    try {
      const response = await fetch(inquiryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...Object.fromEntries(fields.entries()), startedAt: startedAt.current }),
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

  return <form className="contact-form" onSubmit={submit}>
    <label>Full name<input type="text" name="name" autoComplete="name" required /></label>
    <div className="form-row"><label>Email<input type="email" name="email" autoComplete="email" /></label><label>Phone<input type="tel" name="phone" autoComplete="tel" /></label></div>
    <label>How can I help?<select name="interest" defaultValue="" required><option value="" disabled>Select one</option><option>Buying a home</option><option>Selling a home</option><option>Property ownership questions</option><option>Not sure yet</option></select></label>
    <label>Preferred contact method<select name="contactMethod" defaultValue="email"><option value="email">Email</option><option value="phone">Phone call</option><option value="text">Text message</option></select></label>
    <label>Message<textarea name="message" rows={5} required /></label>
    <label className="contact-honeypot" aria-hidden="true">Company website<input type="text" name="companyWebsite" tabIndex={-1} autoComplete="off" /></label>
    <button className="button button-gold" type="submit" disabled={status === "sending" || !inquiryEndpoint}>{status === "sending" ? "Sending…" : "Send message"}</button>
    <p className={`form-status ${status}`} role="status">{message || (inquiryEndpoint ? "Your information is sent securely and used only to respond to your inquiry." : "Online messaging is temporarily unavailable. Please call Emmanuel directly.")}</p>
  </form>;
}
