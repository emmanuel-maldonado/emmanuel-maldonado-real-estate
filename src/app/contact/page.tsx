import Link from "next/link";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return <main>
    <header className="site-header"><Link className="brand" href="/"><span>Salt &amp; Light</span><small>Real Estate</small><em>Emmanuel Maldonado</em></Link><nav aria-label="Main navigation"><Link href="/">Home</Link><Link href="/articles/buyer-roadmap">Buyer guide</Link><Link href="/#service-areas">Explore the 7 Cities</Link></nav><Link className="language-note" href="/es" lang="es">Se habla español</Link></header>
    <section className="contact-page">
      <div className="contact-intro"><p className="eyebrow">Contact Emmanuel</p><h1>How can I help?</h1><p>I would love to hear about your goals and what you are considering. Let&apos;s start with a conversation.</p><div className="direct-contact"><span>Prefer to talk?</span><a href="tel:+15619517983">Call 561 951 7983</a><small>Se habla español</small></div></div>
      <ContactForm />
    </section>
    <footer><span>© 2026 Salt &amp; Light Real Estate</span><span>Brokered by Rooted Residential</span><Link href="/">Return home</Link></footer>
  </main>;
}
