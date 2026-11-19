import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findOpenHouse, openHouses } from "../open-houses";
import SignInForm from "../SignInForm";

export const dynamicParams = false;

export function generateStaticParams() {
  return openHouses.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const house = findOpenHouse(slug);
  return { title: house ? `Open House Sign-In · ${house.street}` : "Open House Sign-In" };
}

export default async function OpenHousePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const house = findOpenHouse(slug);
  if (!house) notFound();
  return <div className="oh-page">
    <section className="oh-hero" aria-label={house.street}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="oh-hero-img" src={house.hero.src1080} srcSet={`${house.hero.src720} 720w, ${house.hero.src1080} 1080w`} sizes="(max-width: 900px) 100vw, 46vw" width={house.hero.width} height={house.hero.height} alt={house.heroAlt} fetchPriority="high" />
      <div className="oh-cap">
        <h1>Open House</h1>
        <div className="oh-rule" />
        <div className="oh-when">{house.whenLabel}</div>
        <div className="oh-addr">{house.street}, {house.cityLine}</div>
      </div>
    </section>
    <SignInForm slug={house.slug} street={house.street} />
  </div>;
}
