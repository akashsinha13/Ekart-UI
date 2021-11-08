export interface Record {
  id: number;
  name: string;
}

export interface ProductCard extends Record {
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

// tslint:disable-next-line
export interface Category extends Record {
}

// tslint:disable-next-line
export interface SubCategory extends Record {
}

// tslint:disable-next-line
export interface Brand extends Record {
}
