import { Brand, Category, Condition, Filters, Size, Type } from "./Filters";

export interface Product {
  id: string;
  sellerId: string;
  title: string;
  type: Type;
  brand: Brand;
  category: Category;
  size: Size;
  condition: Condition;
  materials?: string[];
  sustainability: Record<string,any>;
  price: number;
  images: string[];
  status: string;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string;  
}
