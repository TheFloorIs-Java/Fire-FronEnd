
import { Product } from "./product";
import { User } from "./user";

export class Review {
   
     id?: number  ;
     product!: Product;
     user?: User;
     review!: string;
    // score!: number;

    constructor ( product :Product,review: string ) {
        
        this.id = 0;
        this.product = product;
        this.user = undefined;
        this.review =  review;
        // this.score = 0;
    }
    // buildReview(product: Product, review: string) {
    //     this.product = product;
    //     this.review = review;
    // }
}
