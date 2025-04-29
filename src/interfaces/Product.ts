import {
  BottomSize,
  Brand,
  Category,
  Color,
  Condition,
  Filters,
  OneSize,
  ShoesSize,
  TopSize,
  Type,
} from "./Filters";

export interface Product {
  id: string;
  sellerId: string;
  title: string;
  type?: Type;
  brand?: Brand;
  category?: Category;
  size?: BottomSize | TopSize | ShoesSize | OneSize;
  color?: Color;
  condition?: Condition;
  materials?: string[];
  sustainability?: Record<string, any>;
  price: number;
  images?: string[];
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string;
}
