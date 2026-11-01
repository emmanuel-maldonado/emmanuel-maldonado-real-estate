import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/site-metadata";
import SiteHeader from "../../SiteHeader";
import SiteFooter from "../../SiteFooter";
import "./about.css";

export const metadata = pageMetadata("/about/", "About Emmanuel “Manny” Maldonado | Salt & Light Real Estate", "Meet Emmanuel “Manny” Maldonado, Real Estate Agent & Property Manager with Salt & Light Real Estate in Hampton Roads. Call or text 757-672-6065. Hablo español.");

const promises = [
  ["Honest guidance", "I will tell you what I see, even when it is not what you hoped to hear, and help you weigh your options."],
  ["Clear communication", "You will know what is next at every stage, and you will hear from me consistently through closing."],
  ["No pressure", "No pressure and no assumptions. My job is to help you make the right decision for you, on your timeline."],
  ["English or Spanish", "Every conversation, document review, and update is available in English or Spanish."],
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
        <p className="eyebrow">Hello, I&rsquo;m Manny</p>
        <h2>Real estate decisions deserve time, context, and honest guidance.</h2>
        <p>I help people buy and sell homes in Hampton Roads, and I also work as a property manager. Whether you are buying your first home, selling a place you have loved, or deciding what to do with a property you own, I want you to feel clear, informed, and cared for at every step.</p>
        <h2 className="about-subhead">My story</h2>
        <p>I grew up in West Palm Beach, Florida. College took me to both Maryland and South Carolina, and at Columbia International University I studied business administration while playing baseball.</p>
        <p>Baseball taught me how to compete and how to be a good teammate: show up prepared, do your part, and trust the people around you. Those lessons carry straight into real estate, where a good outcome depends on everyone working well together. Columbia International gave me more than a degree and a spot on the team, too. It is where I met my wife.</p>
        <p>Since graduating, I have worked in property management. Caring for homes on behalf of their owners has taught me to see a property in full: what it takes to maintain, how it performs as a rental, and the bigger decisions owners eventually face. It has also taught me that behind every property is a person with real goals and real concerns. Today I bring that perspective to helping people buy and sell homes across Hampton Roads, so you can make decisions with a clear picture of what a home really involves.</p>
        <p>Virginia Beach is home now, and I am learning quickly about this community, including the many military families who serve here and what matters to them. Through every chapter, my faith has been the steady thread: loving God, loving people, and serving people well. That is the standard I try to hold myself to, in my work and everywhere else.</p>
      </section>

      <section className="about-pm">
        <div className="about-pm-inner">
          <p className="eyebrow">An owner&rsquo;s eye</p>
          <h2>Why property management makes me a better agent.</h2>
          <ul>
            <li>I look at homes the way buyers and inspectors do: maintenance, systems, and the true cost of ownership.</li>
            <li>For sellers, that helps you prepare for what buyers will notice. For buyers, it helps you understand what a home will take to care for after you move in.</li>
            <li>I live and work in Hampton Roads, and I know how location, schools, commutes, and the water shape what buyers here are looking for.</li>
            <li>Pricing comes from a comparative market analysis built on recent REIN MLS sales near you, so you&rsquo;ll see exactly which homes support the number and why.</li>
          </ul>
        </div>
      </section>

      <section className="about-ways">
        <div className="about-section-head"><p className="eyebrow">How I work</p><h2>Serving you well.</h2></div>
        <div className="about-ways-grid">{promises.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}{title === "English or Spanish" ? <> <span lang="es">Hablo español.</span></> : null}</p></article>)}</div>
      </section>

      <section className="about-personal">
        <aside className="about-salt" aria-labelledby="why-salt-light">
          <p className="eyebrow">Why Salt &amp; Light?</p>
          <h2 id="why-salt-light">A name with a reason behind it.</h2>
          <p>The name comes from Jesus&rsquo; words in <span className="name-nowrap">Matthew 5:13-16</span>, where he calls his followers the salt of the earth and the light of the world, and encourages them to let their light shine through good work. For me, that means loving God, loving people, and serving people well: honest work, done in the open, that leaves things better than I found them.</p>
          <p className="about-salt-welcome">My faith shapes how I work, not who I work with. Whatever you believe, you will get the same respect, honesty, and effort from me.</p>
        </aside>
        <div className="about-outside">
          <p className="eyebrow">Outside of work</p>
          <h2>A little more about me.</h2>
          <p>Away from work, my life centers on my wife and family and on our church, where I am glad to be involved. Some of my favorite days are simply time with family at the beach. I try to stay active with fitness and a good game of pickleball, and I am big into making espresso, so I am always happy to talk coffee.</p>
        </div>
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
