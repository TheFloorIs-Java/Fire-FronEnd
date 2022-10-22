import { Product } from "./product";
import {User} from "./user";

export interface Cart1{
    id?: number;
    product?: Product;
    user?: User;
    total_price?: number;
    quantity?: number;
}