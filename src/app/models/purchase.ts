import {Product} from "./product";
import {User} from "./user";

export interface Purchase {
    id? : number,
    product? : Product,
    user? : User,
    date? : Date,
    total_price? : number,
    quantity? : number
}
