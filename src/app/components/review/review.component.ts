import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input()
  allReviews: Array<Review> = [];
  product!: Product;
  user!: User;
  reviewInfo! : Review   ;
  @Input()
  reviewInput : string ="";

  constructor(private rService: ReviewService, private http: HttpClient) { }

  ngOnInit(): void {

    
  }

 addReview(): void {
      this.product.id = 1;
      this.reviewInfo = new Review(1,this.product, this.user,this.reviewInput,)
       
        console.log(this.reviewInfo) ;  
       this.rService.addReview(this.reviewInfo);
 

 }

 getAllReviewsByProuct()
 {

 }

}
