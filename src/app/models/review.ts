import { Product } from "./product";

export class Review {
   
    id: number;
   
    review: string;
     product :Product
    

    constructor (id: number, review: string, product :Product ) {
        this.id = id;
        this.review =  review;
        this.product = product;
    }

}
