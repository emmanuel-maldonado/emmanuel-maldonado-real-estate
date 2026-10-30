import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saltandlight757.com";
  const paths = [
    "/",
    "/es/",
    "/contact/",
    "/sell/",
    "/card/",
    "/articles/",
    "/articles/buyer-roadmap/",
    "/areas/virginia-beach/",
  ];

  return paths.map((path) => ({ url: `${baseUrl}${path}` }));
}
