export const categories = [
  "clothing",
  "shoes",
  "accessories",
  "bags",
  "jewelry",
] as const;

export const top_sizes = [
  "XS",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
  "One Size",
] as const;

export const bottom_sizes = [
  "0",
  "2",
  "4",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "24",
  "26",
  "28",
  "30",
  "32",
  "34",
  "36",
  "38",
  "40",
  "42",
  "44",
  "46",
  "48",
  "50",
  "52",
  "54",
  "56",
  "58",
  "60",
] as const;

export const shoes_sizes = [
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
  "EU 47",
  "EU 48",
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
export type TopSize = (typeof top_sizes)[number];
export type BottomSize = (typeof bottom_sizes)[number];
export type ShoesSize = (typeof shoes_sizes)[number];
export type Condition = (typeof conditions)[number];
export type Type = (typeof types)[number];
export type Brand = (typeof brands)[number];
export type Color = (typeof colors)[number];

export interface Filters {
  categories: Category[];
  top_sizes: TopSize[];
  bottom_sizes: BottomSize[];
  shoes_sizes: ShoesSize[];
  conditions: Condition[];
  types: Type[];
  brands: Brand[];
  colors: Color[];
}
