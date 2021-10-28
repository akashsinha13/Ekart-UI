export interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  thumbnailImage: File;
  rating: number;
  size: Size[];
}

export interface Size {
  id: number;
  size: string;
}