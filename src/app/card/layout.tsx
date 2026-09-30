import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emmanuel Maldonado | Digital Card",
  description: "Save and share Emmanuel Maldonado’s Salt & Light Real Estate digital card.",
  manifest: "/card/manifest.webmanifest",
  icons: {
    apple: "/card-icons/apple-touch-icon.png",
    icon: [
      { url: "/card-icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/card-icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    url: "https://saltandlight757.com/card",
    title: "Emmanuel Maldonado | Salt & Light Real Estate",
    description: "Connect with Emmanuel Maldonado for real estate guidance across Hampton Roads.",
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
    title: "Emmanuel Maldonado | Salt & Light Real Estate",
    description: "Connect with Emmanuel Maldonado for real estate guidance across Hampton Roads.",
    images: ["/images/social-share-emmanuel.png"],
  },
};

export default function CardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
