import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./ScrollReveal";
import MobileNav from "./MobileNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://saltandlight757.com"),
  title: "Salt & Light Real Estate | Emmanuel Maldonado",
  description: "Hampton Roads real estate guidance centered on relationships from Emmanuel Maldonado of Salt & Light Real Estate.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "48x48", type: "image/x-icon" },
      { url: "/card-icons/icon-192.png?v=3", sizes: "192x192", type: "image/png" },
      { url: "/card-icons/icon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/card-icons/apple-touch-icon.png?v=3",
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
