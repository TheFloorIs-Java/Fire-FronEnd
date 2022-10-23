import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input()
  allReviews: Array<Review> = [];
  productInfo!: Product;
  user!: User;
  reviewInfo! : Review ;
  @Input()
  reviewInput : string ="";
  @Input()
  product_id:number = 0;
  user_id : number = 0;

  @Input() postReview: boolean = false;
  
  constructor(private rService: ReviewService, private http: HttpClient, private pservice:ProductService) { }

  ngOnInit(): void {

    
  }

 addReview(): void {
  // HttpSession session = 
  
       this.productInfo = new Product(this.product_id,"",0,"",0,"");
     // this.user = new User(1,"","","","");
      console.log(this.user);
      //  this.pservice.getSingleProduct(this.product_id)
      //   .subscribe(data => {
          
      //     this.productInfo = data;
      //     console.log(this.productInfo);
      //     console.log(this.user);
      //   })
        
        console.log(this.reviewInput) ; 
      this.reviewInfo = new Review(this.productInfo, this.reviewInput)
       
        console.log(this.reviewInfo) ;  
       this.rService.addReview(this.reviewInfo);
       location.reload();
 

 }

 getUserINfo() {
 
  
 }
 
}
