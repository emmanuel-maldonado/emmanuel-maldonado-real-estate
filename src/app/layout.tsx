import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "./ScrollReveal";

export const metadata: Metadata = {
  title: "Salt & Light Real Estate | Emmanuel Maldonado",
  description: "Hampton Roads real estate guidance centered on relationships from Emmanuel Maldonado of Salt & Light Real Estate.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col"><ScrollReveal />{children}</body>
    </html>
  );
}
