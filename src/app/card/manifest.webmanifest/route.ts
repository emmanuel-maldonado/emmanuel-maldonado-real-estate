import { NextResponse } from "next/server";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json({
    name: "Emmanuel Maldonado | Digital Card",
    short_name: "My Digital Card",
    description: "Emmanuel Maldonado’s Salt & Light Real Estate digital card.",
    start_url: "/card/",
    scope: "/card/",
    display: "standalone",
    background_color: "#f5f1e8",
    theme_color: "#081d2d",
    icons: [
      { src: "/card-icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any maskable" },
      { src: "/card-icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" },
    ],
  });
}
