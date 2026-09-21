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
};

export default function CardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
