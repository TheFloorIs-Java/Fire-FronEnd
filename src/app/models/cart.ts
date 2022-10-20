import { Product } from "./product";
import { CartItem } from "./cartitem";


export interface Cart {
    cartCount: number;
    // products: {
    //   product: Product,
    //   quantity: number
    // }[];
    products: CartItem[];
    totalPrice: number;
  }