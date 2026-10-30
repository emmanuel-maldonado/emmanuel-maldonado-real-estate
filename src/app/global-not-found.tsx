import Link from "next/link";
import SiteDocument from "./SiteDocument";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export const metadata = {
  title: "Page not found | Salt & Light Real Estate",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return <SiteDocument lang="en">
    <SiteHeader />
    <main className="contact-page">
      <div className="contact-intro">
        <p className="eyebrow">404</p>
        <h1>Page not found.</h1>
        <p>The page you are looking for could not be found.</p>
        <Link className="button button-gold" href="/">Return home</Link>
      </div>
    </main>
    <SiteFooter />
  </SiteDocument>;
}
