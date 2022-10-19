import { Product } from "./product";


export interface Cart {
    cartCount: number;
    products: {
      product: Product,
      quantity: number
    }[];
    totalPrice: number;
  }