import SiteDocument from "@/app/SiteDocument";
export { baseMetadata as metadata } from "@/lib/site-metadata";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteDocument lang="es">{children}</SiteDocument>;
}
