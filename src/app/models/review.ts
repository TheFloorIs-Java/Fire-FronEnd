
import { Product } from "./product";
import { User } from "./user";

export class Review {
   
     id?: number  ;
     product :Product;
     user?: User;
     review: string;
    

    constructor ( product :Product,review: string ) {
        
        //this.id = id;
        this.product = product;
       // this.user = user;
        this.review =  review;
    }

}
