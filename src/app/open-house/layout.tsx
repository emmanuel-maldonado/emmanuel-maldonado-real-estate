import type { Metadata, Viewport } from "next";
import "./open-house.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://saltandlight757.com"),
  title: "Open House Sign-In | Salt & Light Real Estate",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
  referrer: "no-referrer",
  icons: { icon: [{ url: "/favicon.ico?v=3", sizes: "48x48", type: "image/x-icon" }], apple: "/card-icons/apple-touch-icon.png?v=3" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#081d2d" };

export default function OpenHouseLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className="oh-body">{children}</body></html>;
}
