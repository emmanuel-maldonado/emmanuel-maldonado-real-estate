"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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

export function ShowQrButton() {
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    if (!showQr) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowQr(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [showQr]);

  return <>
    <button className="qr-button" type="button" onClick={() => setShowQr(true)}>Show QR code</button>
    {showQr && <div className="qr-modal" role="dialog" aria-modal="true" aria-labelledby="qr-title" onClick={() => setShowQr(false)}>
      <div className="qr-panel" onClick={(event) => event.stopPropagation()}>
        <button className="qr-close" type="button" aria-label="Close QR code" onClick={() => setShowQr(false)}>×</button>
        <Image src="/card-icons/digital-card-icon.png" alt="" width={72} height={72} className="qr-mark" />
        <h2 id="qr-title">Scan to save my card</h2>
        <p>Point your phone camera at the code.</p>
        <Image src="/digital-card-qr.png" alt="QR code for Emmanuel Maldonado's digital business card" width={540} height={540} priority />
        <strong>saltandlight757.com/card</strong>
      </div>
    </div>}
  </>;
}
