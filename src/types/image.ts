export type Image = {
  slug?: string
  url: string
  alt: string
}

export type Images = Image[]

export type Gallery = {
  title: string
  items: Images
}
