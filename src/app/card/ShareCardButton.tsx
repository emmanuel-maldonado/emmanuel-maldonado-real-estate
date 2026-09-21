"use client";

import { useState } from "react";

export default function ShareCardButton() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = "https://saltandlight757.com/card/";
    const data = {
      title: "Emmanuel Maldonado | Salt & Light Real Estate",
      text: "Here is Emmanuel Maldonado’s digital real estate card.",
      url,
    };
    if (navigator.share) {
      try { await navigator.share(data); } catch { /* The visitor closed the share sheet. */ }
      return;
    }
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return <button type="button" onClick={share}>{copied ? "Link copied" : "Share with a friend"}</button>;
}
