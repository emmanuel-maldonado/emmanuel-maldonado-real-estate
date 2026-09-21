"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNav() {
  const pathname = usePathname();
  if (pathname === "/card") return null;

  return <nav className="mobile-nav" aria-label="Mobile navigation">
    <Link href="/"><span>Home</span></Link>
    <Link href="/articles/buyer-roadmap"><span>Buyer guide</span></Link>
    <Link href="/#service-areas"><span>7 Cities</span></Link>
    <Link href="/contact"><span>Contact</span></Link>
  </nav>;
}
