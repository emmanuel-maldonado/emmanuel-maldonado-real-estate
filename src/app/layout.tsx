import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./ScrollReveal";
import MobileNav from "./MobileNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://saltandlight757.com"),
  title: "Salt & Light Real Estate | Emmanuel Maldonado",
  description: "Hampton Roads real estate guidance centered on relationships from Emmanuel Maldonado of Salt & Light Real Estate.",
  icons: {
    icon: "/card-icons/icon-192.png",
    apple: "/card-icons/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://saltandlight757.com",
    title: "Salt & Light Real Estate | Emmanuel Maldonado",
    description: "Clear guidance for buying, selling, and owning a home in Hampton Roads.",
    siteName: "Salt & Light Real Estate",
    images: [
      {
        url: "/images/social-share-emmanuel.png",
        width: 1731,
        height: 909,
        alt: "Emmanuel Maldonado on the Hampton Roads shoreline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Salt & Light Real Estate | Emmanuel Maldonado",
    description: "Clear guidance for buying, selling, and owning a home in Hampton Roads.",
    images: ["/images/social-share-emmanuel.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col"><ScrollReveal />{children}<MobileNav /></body>
    </html>
  );
}
