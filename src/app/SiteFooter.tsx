import Link from "next/link";
import BrokerageDisclosure from "./BrokerageDisclosure";

export default function SiteFooter() {
  return <footer className="site-footer"><div className="footer-main"><div><strong>Salt &amp; Light Real Estate</strong><span>Emmanuel Maldonado · Real Estate Agent &amp; Property Manager</span><BrokerageDisclosure /></div><div><strong>Hampton Roads</strong><div className="footer-city-links"><Link href="/areas/virginia-beach">Virginia Beach</Link><Link href="/#norfolk">Norfolk</Link><Link href="/#chesapeake">Chesapeake</Link><Link href="/#suffolk">Suffolk</Link><Link href="/#portsmouth">Portsmouth</Link><Link href="/#hampton">Hampton</Link><Link href="/#newport-news">Newport News</Link></div></div><div><strong>Connect</strong><Link href="/contact">Contact Emmanuel</Link><Link href="/card">Digital business card</Link><Link href="/articles/buyer-roadmap">Buyer Roadmap</Link></div></div><div className="footer-bottom"><span>© 2026 Salt &amp; Light Real Estate</span><span>Serving Hampton Roads, Virginia</span></div></footer>;
}
