import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vinay Kumar Portfolio",
    short_name: "Vinay Kumar",
    description: "Distributed systems and backend engineering portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#090a0b",
    theme_color: "#4fd1c5",
    icons: [
      {
        src: "/opengraph-image",
        sizes: "1200x630",
        type: "image/png"
      }
    ]
  };
}
