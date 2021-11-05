export interface ProductCard {
  id: number;
  name: string;
  price: number;
  discount: number;
  thumbnailImage: File;
  rating?: number;
  color?: Color;
  description?: string[];
  size?: Size[];
}

export enum Color {
  BLACK, BLUE, GREEN, PINK, RED, WHITE, YELLOW
}

export interface Size {
  id: number;
  size: string;
}
