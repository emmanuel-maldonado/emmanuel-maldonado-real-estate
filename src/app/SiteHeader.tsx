import Link from "next/link";

export default function SiteHeader() {
  return <header className="site-header"><Link className="brand" href="/" aria-label="Salt and Light Real Estate home"><span>Salt &amp; Light</span><small>Real Estate</small><em>Emmanuel Maldonado</em></Link><nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/articles/buyer-roadmap">Buyer guide</Link><Link href="/sell/">Sell your home</Link><Link href="/#service-areas">Explore the 7 Cities</Link><Link href="/#about">About</Link></nav><Link className="language-note" href="/es" lang="es">Hablo español</Link><Link className="header-cta" href="/contact">Contact</Link></header>;
}
