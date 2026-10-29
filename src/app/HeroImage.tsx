// Prebuilt responsive assets work on Firebase without an image optimization server.
const srcSet = [640, 960, 1280, 1920]
  .map((width) => `/images/first-landing-shoreline-${width}.webp ${width}w`)
  .join(", ");

export default function HeroImage() {
  return (
    <>
      <link rel="preload" as="image" imageSrcSet={srcSet} imageSizes="100vw" />
      {/* Native srcSet preserves responsive selection with Next's static export. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/first-landing-shoreline-1280.webp"
        srcSet={srcSet}
        sizes="100vw"
        alt="Chesapeake Bay shoreline at First Landing State Park in Virginia Beach"
        width={3872}
        height={2592}
        loading="eager"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
    </>
  );
}
