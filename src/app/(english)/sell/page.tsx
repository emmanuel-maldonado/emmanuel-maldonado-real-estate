import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/site-metadata";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";
import HomeValueForm from "./HomeValueForm";
import "./sell.css";

export const metadata = pageMetadata("/sell/", "What's My Home Worth? Sell Your Home in Virginia Beach | Emmanuel Maldonado", "Request a free comparable-sales market analysis for your Hampton Roads home from Emmanuel Maldonado of Salt & Light Real Estate. Call 757-672-6065. Hablo espa\u00f1ol.");

const faq = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is my home worth in Virginia Beach?", "acceptedAnswer": {"@type": "Answer", "text": "A home's value depends on recent comparable sales nearby, its condition, size, updates, and current buyer demand. A comparable-sales market analysis compares your home with similar homes that recently sold near you to estimate a realistic list price range. It is not an appraisal."}}, {"@type": "Question", "name": "How long does it take to sell a house in Virginia Beach?", "acceptedAnswer": {"@type": "Answer", "text": "Timing depends on price, condition, location, season, and how many similar homes are for sale. After you accept an offer, closing usually follows the timeline in the contract, which often depends on the buyer's financing."}}, {"@type": "Question", "name": "What does it cost to sell a house in Virginia?", "acceptedAnswer": {"@type": "Answer", "text": "Common costs include brokerage compensation, which is negotiable, settlement and closing fees, Virginia grantor's tax and other recording costs, payoff of any mortgage, prorated property taxes, and any repairs or credits you agree to. Your net proceeds estimate should list each one."}}, {"@type": "Question", "name": "Do I need to make repairs before selling my house?", "acceptedAnswer": {"@type": "Answer", "text": "Not always. Some sellers make small repairs and touch-ups to widen buyer appeal, others sell as-is and price accordingly. The right choice depends on the repair, its cost, and how it affects value and buyer financing."}}]};

export default function SellPage() {
  return <>
    <SiteHeader />
    <main className="sell-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq).replace(/</g, "\\u003c") }} />
<section className="seller-hero" id="home-value">
  <div>
    <p className="eyebrow">Selling in Hampton Roads</p>
    <h1>What is your home worth in today&apos;s market?</h1>
    <p className="hero-lede">Get a free comparable-sales market analysis from someone who knows how homes are lived in, cared for, and valued here. No pressure, no obligation, and a clear explanation of the numbers.</p>
    <ul className="hero-points">
      <li>Built from recent nearby sales, not an online estimate</li>
      <li>Reviewed with you personally, in English or Spanish</li>
      <li>Honest guidance on whether, when, and how to sell</li>
    </ul>
    <p className="hero-call">Prefer to talk? <a href="tel:+17576726065">757-672-6065</a></p>
    <p className="brokerage">Salt &amp; Light Real Estate · Brokered by Rooted Residential</p>
  </div>

  <HomeValueForm />
</section>

<section className="how" id="how-it-works">
  <div className="section-head">
    <p className="eyebrow">How it works</p>
    <h2>Three simple steps to a realistic number.</h2>
    <p>Online estimates cannot see your kitchen, your roof, or the street you live on. A comparable-sales analysis looks at the homes buyers will actually compare yours to.</p>
  </div>
  <div className="steps">
    <article><span>STEP 01</span><h3>Tell me about your home</h3><p>Send the form or call. I will ask about size, updates, condition, and what you hope to do next.</p></article>
    <article><span>STEP 02</span><h3>I pull the comparable sales</h3><p>I review similar homes that recently sold, are pending, or are listed near you, and adjust for the differences that matter.</p></article>
    <article><span>STEP 03</span><h3>We review it together</h3><p>You get a suggested price range and a plain-language explanation, in person, by phone, or by video, in English or Spanish.</p></article>
  </div>
  <p className="disclaimer"><strong>Good to know:</strong> this free market analysis is an opinion of value based on comparable sales. It is not an appraisal and should not be used in place of one for lending or legal purposes.</p>
</section>

<section className="why" id="why-emmanuel">
  <div className="section-head">
    <p className="eyebrow">Why work with Emmanuel</p>
    <h2>A practical perspective on selling.</h2>
    <p>Selling is a big decision. You deserve someone who explains the options and treats your home like it matters.</p>
  </div>
  <div className="why-grid">
    <div className="why-photo"><Image src="/images/emmanuel-maldonado.jpg" alt="Emmanuel Maldonado" width={900} height={1125} /></div>
    <div className="why-list">
      <article><h3>Your local neighbor</h3><p>I live and work in Hampton Roads. I know how location, schools, commutes, and the water shape what buyers here are looking for.</p></article>
      <article><h3>An owner&apos;s eye for condition</h3><p>My property management background means I look at homes the way buyers and inspectors do: maintenance, systems, and the true cost of ownership. That helps you prepare for what buyers will notice.</p></article>
      <article><h3>Bilingual service</h3><p>Every conversation, document review, and update is available in English or Spanish. <span lang="es">Hablo español.</span></p></article>
      <article><h3>Data-backed pricing</h3><p>I pull recent comparable sales from REIN, our local MLS, so you can see exactly which homes the price is based on and why.</p></article>
    </div>
  </div>
</section>

<section className="process" id="seller-process">
  <div className="section-head">
    <p className="eyebrow">What to expect</p>
    <h2>The selling process, step by step.</h2>
    <p>Every sale is different, but most follow the same path. You will know what is next at every stage.</p>
  </div>
  <ol className="timeline">
    <li><div><h3>Consultation and pricing</h3><p>We review your goals, timeline, and market analysis, and talk through an estimate of your net proceeds.</p></div></li>
    <li><div><h3>Preparation</h3><p>We decide together which repairs, cleaning, or staging are worth it, and which are not.</p></div></li>
    <li><div><h3>Listing and marketing</h3><p>Professional photos, a strong listing description, and exposure to buyers and their agents.</p></div></li>
    <li><div><h3>Showings and offers</h3><p>I coordinate showings, gather feedback, and walk you through each offer&apos;s price, terms, and contingencies.</p></div></li>
    <li><div><h3>Inspection and appraisal</h3><p>We respond to repair requests and the buyer&apos;s appraisal with a clear plan and steady communication.</p></div></li>
    <li><div><h3>Closing</h3><p>Final walkthrough, settlement, and handing over the keys, with someone to call even after closing.</p></div></li>
  </ol>
</section>

<section className="cities" id="cities">
  <div>
    <p className="eyebrow">Selling across Hampton Roads</p>
    <h2>Local guidance in all seven cities.</h2>
    <p>Each city has its own housing types, waterfronts, and buyer priorities. Learn more about where you live.</p>
  </div>
  <div className="city-links">
    <Link href="/areas/virginia-beach/">Virginia Beach <span>→</span></Link>
    <Link href="/#norfolk">Norfolk <span>→</span></Link>
    <Link href="/#chesapeake">Chesapeake <span>→</span></Link>
    <Link href="/#suffolk">Suffolk <span>→</span></Link>
    <Link href="/#portsmouth">Portsmouth <span>→</span></Link>
    <Link href="/#hampton">Hampton <span>→</span></Link>
    <Link href="/#newport-news">Newport News <span>→</span></Link>
  </div>
</section>

<section className="faq" id="faq">
  <div className="section-head">
    <p className="eyebrow">Seller questions</p>
    <h2>Common questions about selling.</h2>
  </div>
  <div className="faq-list">
    <details open><summary>What is my home worth in Virginia Beach?</summary><div>
      <p>Your home&apos;s value depends on recent comparable sales nearby, its condition, size, layout, updates, and how many similar homes buyers can choose from right now. Online estimates are a starting point, but they cannot see inside your home.</p>
      <p>A comparable-sales market analysis compares your home with similar homes that recently sold near you to estimate a realistic price range. It is free, and it is not an appraisal. For context, the median recorded price of a Virginia Beach home sale over the past 12 months was <strong>$403,000</strong>.<small className="source-note">Source: City of Virginia Beach Real Estate Assessor public sales records, 6,497 residential sales recorded Sep 29, 2025 – Sep 28, 2026 (single-family, townhouse, condo, duplex), excluding non-market transfers. Retrieved Oct 29, 2026. For comparison, <a href="https://www.redfin.com/city/20418/VA/Virginia-Beach/housing-market">Redfin</a> reports $429,795 for the 3 months ending Sep 2026.</small></p></div></details>
    <details open><summary>How long does it take to sell a house?</summary><div>
      <p>Timing depends on price, condition, location, the season, and local inventory. Well-prepared homes priced in line with recent sales tend to attract interest sooner. After you accept an offer, the closing date follows the contract, often based on the buyer&apos;s financing.</p>
      <p>Lately, Virginia Beach homes have gone under contract in a median of about <strong>28 days</strong>, and Hampton Roads homes overall in <strong>30 days</strong>.<small className="source-note">Sources: <a href="https://www.redfin.com/city/20418/VA/Virginia-Beach/housing-market">Redfin Virginia Beach housing market</a>, data through Sep 2026 (retrieved Oct 29, 2026); <a href="https://www.reinmls.com/news/median-sales-prices-down-across-region">REIN September 2026 market release</a>, published Oct 9, 2026.</small></p></div></details>
    <details open><summary>What does it cost to sell a house in Virginia?</summary><div>
      <p>Common costs include brokerage compensation (which is negotiable), settlement and closing fees, Virginia grantor&apos;s tax and other recording costs, payoff of any mortgage or liens, prorated property taxes, and any repairs or credits you agree to with the buyer. Before you list, I will walk you through an estimated net proceeds sheet so there are no surprises.</p></div></details>
    <details open><summary>Do I need to make repairs before selling?</summary><div>
      <p>Not always. Some sellers make small repairs and touch-ups to appeal to more buyers. Others sell as-is and price the home to reflect its condition. The right choice depends on the repair, what it costs, and how it affects value and buyer financing. We can decide together which projects are worth it.</p></div></details>
  </div>
</section>

<section className="contact" id="contact">
  <div>
    <p className="eyebrow">Begin here</p>
    <h2>Curious what your home could sell for?</h2>
    <p>No pressure and no assumptions. Call or text, or request your free market analysis, and I will follow up personally. <span lang="es">Hablo español.</span></p>
  </div>
  <div className="cta-actions">
    <a className="button button-light" href="tel:+17576726065">Call 757-672-6065</a>
    <a className="button button-outline-light" href="#home-value">Request my home value</a>
  </div>
</section>

    </main>
    <SiteFooter />
  </>;
}
