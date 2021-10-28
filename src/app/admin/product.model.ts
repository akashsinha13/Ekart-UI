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
  thumbnailImage: any[];
  images: any;
}

export enum Color {
  BLACK, BLUE, GREEN, PINK, RED, WHITE, YELLOW
}

export interface Record {
  name: string;
  info: string[];
}
