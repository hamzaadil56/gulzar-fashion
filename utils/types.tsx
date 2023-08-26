import type { Image } from "sanity";

export interface Product {
  title: string;
  description: string;
  images: Image[];
  price: number;
  _id: string;
}