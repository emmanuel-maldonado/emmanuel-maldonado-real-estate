import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virginia Beach Real Estate Guide | Emmanuel Maldonado",
  description: "A practical guide to buying and owning a home in Virginia Beach from Emmanuel Maldonado of Salt & Light Real Estate.",
};

export default function VirginiaBeachPage() {
  return <main>
    <header className="site-header"><Link className="brand" href="/"><span>Salt &amp; Light</span><small>Real Estate</small></Link><nav><Link href="/">Home</Link><Link href="/#service-areas">Explore the 7 Cities</Link><Link href="/articles/buyer-roadmap">Buyer Roadmap</Link></nav><Link className="header-cta" href="/contact">Contact</Link></header>
    <section className="area-hero"><div><p className="eyebrow">Virginia Beach real estate</p><h1>Finding your place in Virginia Beach.</h1><p>Virginia Beach includes coastal communities, established neighborhoods, busy employment centers, and a rural southern area. The right location depends on how you want to live, commute, and care for your home.</p><div className="hero-actions"><Link className="button button-gold" href="/contact">Talk with Emmanuel</Link><Link className="text-link" href="/articles/buyer-roadmap">Read the Buyer Roadmap <span>→</span></Link></div></div><div className="area-hero-image"><Image src="/images/virginia-beach-coast.jpg" alt="Virginia Beach coastline at sunset" fill priority sizes="(max-width: 820px) 100vw, 48vw" /></div></section>
    <section className="area-contexts"><p className="eyebrow">Different parts of Virginia Beach</p><div><article><span>01</span><h3>Coastal communities</h3><p>Living near the Oceanfront or Chesapeake Bay offers easy access to the water, restaurants, recreation, and an active coastal lifestyle.</p></article><article><span>02</span><h3>Central Virginia Beach</h3><p>Central areas offer convenient access to shopping, employment centers, parks, major roads, and many everyday needs.</p></article><article><span>03</span><h3>Established neighborhoods</h3><p>Across the city, established communities offer mature surroundings, different home styles, and a more residential pace.</p></article><article><span>04</span><h3>Southern Virginia Beach</h3><p>The southern part of the city can provide a more rural feel, with open space, larger properties, quieter surroundings, and longer drives to many destinations.</p></article></div></section>
    <section className="official-resources"><p className="eyebrow">Official planning resources</p><h2>Research the details.</h2><div><a href="https://planning.virginiabeach.gov/comp-plan/context-areas" target="_blank" rel="noreferrer">City context areas <span>↗</span></a><a href="https://eccs.virginiabeach.gov/vb311/essential-maps" target="_blank" rel="noreferrer">Essential city maps <span>↗</span></a></div></section>
    <section className="guide-cta"><div><p className="eyebrow">Considering Virginia Beach?</p><h2>Let&apos;s talk about what you need.</h2><p>We can discuss location, property condition, ownership costs, and what would make a move worthwhile for you.</p></div><Link className="button button-light" href="/contact">Contact Emmanuel</Link></section>
    <footer><span>© 2026 Salt &amp; Light Real Estate</span><span>Emmanuel Maldonado · Brokered by Rooted Residential</span><Link href="/">Explore Hampton Roads</Link></footer>
  </main>;
}
