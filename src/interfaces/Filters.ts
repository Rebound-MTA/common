export type Category =
  | "clothing"
  | "shoes"
  | "accessories"
  | "bags"
  | "jewelry";

export type Size =
  | "XS"
  | "S"
  | "M"
  | "L"
  | "XL"
  | "XXL"
  | "One Size"
  | "EU 36"
  | "EU 37"
  | "EU 38"
  | "EU 39"
  | "EU 40"
  | "EU 41"
  | "EU 42"
  | "EU 43"
  | "EU 44"
  | "EU 45"
  | "EU 46";

export type Condition = "new" | "like new" | "good" | "fair" | "worn";

export type Type =
  | "dress"
  | "jeans"
  | "t-shirt"
  | "sneakers"
  | "heels"
  | "jacket"
  | "bag"
  | "necklace"
  | "hat"
  | "skirt"
  | "shorts"
  | "boots";

export type Brand =
  | "Zara"
  | "H&M"
  | "Nike"
  | "Adidas"
  | "Gucci"
  | "Prada"
  | "Chanel"
  | "Levi's"
  | "Uniqlo"
  | "Balenciaga";

export interface Filters {
  category: Category;
  size: Size;
  condition: Condition;
  type: Type;
  brand: Brand;
}
