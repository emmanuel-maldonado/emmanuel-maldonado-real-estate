import "./globals.css";
import ScrollReveal from "./ScrollReveal";
import MobileNav from "./MobileNav";

const business = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "@id": "https://saltandlight757.com/#business",
  name: "Salt & Light Real Estate",
  url: "https://saltandlight757.com/",
  telephone: "+1-757-672-6065",
  areaServed: [
    { "@type": "City", name: "Virginia Beach, Virginia" },
    { "@type": "Place", name: "Hampton Roads, Virginia" },
  ],
};

export default function SiteDocument({ children, lang }: {
  children: React.ReactNode;
  lang: "en" | "es";
}) {
  return (
    <html lang={lang}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(business).replace(/</g, "\\u003c"),
        }} />
        <ScrollReveal />{children}<MobileNav />
      </body>
    </html>
  );
}
