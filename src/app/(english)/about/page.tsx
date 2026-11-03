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
];

export default function AboutPage() {
  return <>
    <SiteHeader />
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-photo"><Image src="/images/emmanuel-maldonado-headshot.jpg" alt="Emmanuel “Manny” Maldonado" fill priority sizes="(max-width: 820px) 100vw, 40vw" /></div>
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
        <p>I grew up in West Palm Beach, Florida, where baseball was a big part of my life from an early age. As I got older, I also spent time helping my parents with their business, Lion Ink Print, which played an important role in developing my work ethic.</p>
        <p>Baseball eventually took me to college in Maryland and South Carolina, where I studied Business Administration and played at Columbia International University. Along the way, I further developed my discipline, leadership, and appreciation for teamwork, qualities I carry into my career today. It was also at Columbia International that I met my wife.</p>
        <p>After graduating, I began my career in property management, gaining firsthand experience caring for homes, working with property owners, and understanding real estate beyond the transaction. That experience gives me a valuable perspective when helping clients buy, sell, or invest in real estate.</p>
        <p>Today, I&rsquo;m proud to call Virginia Beach home and serve clients throughout Hampton Roads. My goal is simple: to provide honest guidance, clear communication, and a level of service my clients can trust.</p>
        <p>Above all, my faith shapes how I approach life and business: loving God, loving people, and serving others with integrity.</p>
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
        <div className="about-ways-grid">{promises.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="about-personal">
        <aside className="about-salt" aria-labelledby="why-salt-light">
          <p className="eyebrow">Why Salt &amp; Light?</p>
          <h2 id="why-salt-light">A name with a reason behind it.</h2>
          <p>The name comes from Jesus&rsquo; words in <span className="name-nowrap">Matthew 5:13-16</span>, where he calls his followers the salt of the earth and the light of the world, and encourages them to let their light shine through good work. For me, that means loving God, loving people, and serving people well: honest work, done in the open, that leaves things better than I found them.</p>
          <p className="about-salt-welcome">My faith shapes how I work, not who I work with. Whatever you believe, you will get the same respect, honesty, and effort from me.</p>
        </aside>
        <div className="about-outside">
          <Image className="about-outside-photo" src="/images/about/manny-and-wife.jpg" alt="Manny and his wife at the beach" width={1200} height={1200} loading="lazy" sizes="(max-width: 820px) 100vw, 480px" />
          <p className="eyebrow">Outside of Work</p>
          <h2>A little more about me.</h2>
          <p>Outside of real estate, I enjoy spending time with my wife and family, serving at our local church, and staying active through weightlifting and pickleball. You&rsquo;ll also find me enjoying the beach or making a good espresso at home.</p>
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
