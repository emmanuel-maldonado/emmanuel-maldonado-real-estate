import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/site-metadata";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";
import "./about.css";

export const metadata = pageMetadata("/about/", "About Emmanuel “Manny” Maldonado | Salt & Light Real Estate", "Meet Emmanuel “Manny” Maldonado, Real Estate Agent & Property Manager with Salt & Light Real Estate in Hampton Roads. Call or text 757-672-6065. Hablo español.");

const ways = [
  ["Your local neighbor", "I live and work in Hampton Roads. I know how location, schools, commutes, and the water shape what buyers here are looking for."],
  ["An owner’s eye for condition", "My property management background means I look at homes the way buyers and inspectors do: maintenance, systems, and the true cost of ownership."],
  ["Bilingual service", "Every conversation, document review, and update is available in English or Spanish."],
  ["Data-backed pricing", "Your price comes from a comparative market analysis built on recent REIN MLS sales near you, so you’ll see exactly which homes support the number and why."],
];

export default function AboutPage() {
  return <>
    <SiteHeader />
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-photo"><Image src="/images/emmanuel-maldonado.jpg" alt="Emmanuel “Manny” Maldonado" fill priority sizes="(max-width: 820px) 100vw, 40vw" /></div>
        <div className="about-hero-copy">
          <p className="eyebrow">About Emmanuel</p>
          <h1>Meet Emmanuel &ldquo;Manny&rdquo; Maldonado</h1>
          <p className="about-title">Real Estate Agent &amp; Property Manager</p>
          <p className="about-manny">Most people call me Manny, and you can too.</p>
          <p className="about-hero-call"><a href="tel:+17576726065">Call or text Manny at 757-672-6065</a><span lang="es">Hablo español</span></p>
          <p className="brokerage">Salt &amp; Light Real Estate · Brokered by Rooted Residential</p>
        </div>
      </section>

      <section className="about-story">
        <p className="eyebrow">A practical perspective on ownership</p>
        <h2>Real estate decisions deserve time, context, and honest guidance.</h2>
        <p>Property management has shown me the full lifecycle of a home, from day-to-day care to rental potential and future decisions.</p>
        <p>I am building Salt &amp; Light around being a useful resource before, during, and after the transaction. I want you to understand the decision in front of you and feel prepared for what comes after it.</p>
      </section>

      <section className="about-ways">
        <div className="about-section-head"><p className="eyebrow">How I work</p><h2>Practical, local, and personal.</h2></div>
        <div className="about-ways-grid">{ways.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}{title === "Bilingual service" ? <> <span lang="es">Hablo español.</span></> : null}</p></article>)}</div>
      </section>

      <section className="about-help">
        <div className="about-section-head"><p className="eyebrow">Buying · Selling · Ownership</p><h2>How I can help you.</h2></div>
        <div className="about-help-grid">
          <article><h3>Buying a home</h3><p>Understand your options, prepare for the process, and make decisions that fit your life and finances.</p><Link className="text-link" href="/articles/buyer-roadmap/">Read the Hampton Roads Buyer Roadmap <span>→</span></Link></article>
          <article><h3>Selling a home</h3><p>Prepare and position your property with a clear plan and consistent communication through closing.</p><Link className="text-link" href="/sell/">Get a free market analysis <span>→</span></Link></article>
          <article><h3>Planning for ownership</h3><p>Get practical perspective on maintenance, rental readiness, and whether selling or renting makes sense.</p><Link className="text-link" href="/card">Save my digital card <span>→</span></Link></article>
        </div>
      </section>

      <section className="contact" id="contact">
        <div><p className="eyebrow">Begin here</p><h2>Let&rsquo;s start the conversation.</h2><p>No pressure and no assumptions. Share what is on your mind, and I will follow up personally. <span lang="es">Hablo español.</span></p></div>
        <div className="about-cta-actions"><a className="button button-light" href="tel:+17576726065">Call or text Manny at 757-672-6065</a><Link className="button about-button-outline" href="/contact">Contact Emmanuel</Link></div>
      </section>
    </main>
    <SiteFooter />
  </>;
}
