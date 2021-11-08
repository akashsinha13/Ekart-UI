export interface Product {
  id: number;
  name: string;
  description: string[];
  price: number;
  discount: number;
  quantity: number;
  size: string[];
  color: Color[];
  category: string;
  brand: string;
  info: Record[];
  thumbnailImage: File;
  images: File[];
}

export enum Color {
  BLACK, BLUE, GREEN, PINK, Red, WHITE, YELLOW
}

export interface Record {
  name: string;
  info: string[];
}

export interface Category {
  id: number;
  name: string;
}
