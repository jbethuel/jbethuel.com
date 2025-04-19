import { Gallery, Images } from "@/types/image"

export const oslob = [
  {
    url: "https://assets.jbethuel.com/gallery/4808.jpeg",
    alt: "Blue Sky",
  },
]

export const malaybalay: Images = [
  {
    url: "https://assets.jbethuel.com/gallery/4E14.jpeg",
    alt: "Big Rock",
  },
  {
    url: "https://assets.jbethuel.com/gallery/465A.jpeg",
    alt: "Road to Kibalabag",
  },
]

export const claveria: Images = [
  {
    url: "https://assets.jbethuel.com/gallery/40A8.jpeg",
    alt: "Look",
  },
]

export const medina: Images = [
  {
    url: "https://assets.jbethuel.com/gallery/45A1.jpeg",
    alt: "Duka Bay 1",
  },
  {
    url: "https://assets.jbethuel.com/gallery/4EA3.jpeg",
    alt: "Duka Bay 2",
  },
]

export const gallery: Gallery[] = [
  {
    title: "Bukidnon - Malaybalay",
    items: malaybalay,
  },
  {
    title: "Misamis Oriental - Claveria",
    items: claveria,
  },
  {
    title: "Misamis Oriental - Medina",
    items: medina,
  },
  {
    title: "Cebu - Oslob",
    items: oslob,
  },
].map((each, galleryIndex) => ({
  ...each,
  items: each.items.map((item, itemIndex) => ({
    ...item,
    slug: `${galleryIndex}-${itemIndex}`,
  })),
}))

export const galleryData: Images = gallery.flatMap((e) => e.items)
