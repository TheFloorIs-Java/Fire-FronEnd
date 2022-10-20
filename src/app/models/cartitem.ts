import { Product } from "./product";
import { User } from "./user";

export interface CartItem {
    // id: number;
    product: Product;
    // user: User;
    totalPrice: number;
    quantity: number;
}