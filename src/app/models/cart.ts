import { Product } from "./product";
import {User} from "./user";

export interface Cart {
    cartCount: number;
    products: {
        product: Product,
        quantity: number
    }[];
    totalPrice: number;
}

export interface Cart1{
    id?: number;
    product?: Product;
    user?: User;
    total_price?: number;
    quantity?: number;
}