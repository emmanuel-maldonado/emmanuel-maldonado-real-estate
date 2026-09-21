"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", open);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [open]);

  if (pathname === "/card") return null;

  return <>
    <button className={`menu-toggle ${open ? "is-open" : ""}`} type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((current) => !current)}>
      <span /><span /><span />
    </button>
    <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-menu" aria-hidden={!open}>
      <nav aria-label="Mobile navigation">
        <Link href="/">Home</Link>
        <Link href="/articles">Guides &amp; insights</Link>
        <Link href="/articles/buyer-roadmap">Buyer roadmap</Link>
        <Link href="/#service-areas">The 7 Cities</Link>
        <Link href="/contact">Contact Emmanuel</Link>
      </nav>
      <p>Salt &amp; Light Real Estate<br /><small>Brokered by Rooted Residential</small></p>
    </div>
  </>;
}
