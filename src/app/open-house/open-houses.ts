// Open houses with a public sign-in page at /open-house/<slug>/.
// To add one: add an entry here AND the same slug to OPEN_HOUSES in the CRM
// (lib/open-house.ts). The CRM refuses slugs it does not know.
export type OpenHouse = {
  slug: string;
  street: string;
  cityLine: string;
  whenLabel: string;
  heroAlt: string;
  hero: { src720: string; src1080: string; width: number; height: number };
};

export const openHouses: OpenHouse[] = [
  {
    slug: "1337-jackson",
    street: "1337 Jackson Ave",
    cityLine: "Chesapeake, VA 23324",
    whenLabel: "Saturday, Nov 21 · 11 AM – 1 PM",
    heroAlt: "Front of 1337 Jackson Ave, a two-story yellow home with a covered front porch",
    hero: { src720: "/open-house/1337-jackson/house-720.webp", src1080: "/open-house/1337-jackson/house-1080.webp", width: 1080, height: 1100 },
  },
];

export const findOpenHouse = (slug: string) => openHouses.find((item) => item.slug === slug);
