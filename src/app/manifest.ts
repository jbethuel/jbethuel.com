import type { MetadataRoute } from "next"

// Required by `output: "export"`: the manifest is written out at build time.
export const dynamic = "force-static"

// Mirrors the design's site.webmanifest. The 180px icon is the one the
// `app/apple-icon.png` file convention already serves.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "jbethuel.com",
    short_name: "jbethuel",
    start_url: "/",
    display: "standalone",
    theme_color: "#5b6a35",
    background_color: "#fafbf6",
    icons: [
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
