export const categories = [
  "clothing",
  "shoes",
  "accessories",
  "bags",
  "jewelry",
] as const;

export const sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "One Size",
  "EU 36",
  "EU 37",
  "EU 38",
  "EU 39",
  "EU 40",
  "EU 41",
  "EU 42",
  "EU 43",
  "EU 44",
  "EU 45",
  "EU 46",
] as const;

export const conditions = ["new", "like new", "good", "fair", "worn"] as const;

export const types = [
  "dress",
  "jeans",
  "t-shirt",
  "sneakers",
  "heels",
  "jacket",
  "bag",
  "necklace",
  "hat",
  "skirt",
  "shorts",
  "boots",
] as const;

export const brands = [
  "Zara",
  "H&M",
  "Nike",
  "Adidas",
  "Gucci",
  "Prada",
  "Chanel",
  "Levi's",
  "Uniqlo",
  "Balenciaga",
] as const;

export const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "black",
  "white",
  "gray",
  "purple",
  "pink",
  "orange",
  "brown",
  "beige",
] as const;

export type Category = (typeof categories)[number];
export type Size = (typeof sizes)[number];
export type Condition = (typeof conditions)[number];
export type Type = (typeof types)[number];
export type Brand = (typeof brands)[number];
export type Color = (typeof colors)[number];

export interface Filters {
  categories: Category[];
  sizes: Size[];
  conditions: Condition[];
  types: Type[];
  brands: Brand[];
  colors: Color[];
}
