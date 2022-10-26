import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
 
  productInfo!: Product;
  user!: User;
  reviewInfo! : Review ;
  
  user_id : number = 0;

  
  review!: Review;
  product!: Product;
  reviewString!: string;
   
  /**
     * This constructor is used to inject  ReviewService, HttpClient, ActivatedRoute and MatDialogRef
     * @param rService This is the first parameter to constructor method
     * @param http This is the second parameter to constructor method
     * @param router This is the third parameter to constructor method
     * @param dialogRef This is the fourth parameter to constructor method
     * @return Nothing.
     */
  constructor(private rService: ReviewService, 
    private http: HttpClient, 
    private router: ActivatedRoute,
    public dialogRef: MatDialogRef<ReviewComponent>) {
    this.router.queryParams.subscribe(data => {
      let productId = data['id'];
      this.product = new Product(productId, "", 0, "", 0, "");
    });
    this.reviewString = "";
   }

  ngOnInit(): void {}
   
    /**
     * This method is used to add review object to database 
     * @return Nothing
     */
  addReview() {
    console.log(this.reviewString);
    this.review = new Review(this.product, this.reviewString);
   
    console.log(this.review);
    this.rService.addReview(this.review).subscribe(data => console.log(data));
   
    location.reload();
  }

  addReviewHome(product: Product){
    this.review = new Review(this.product, this.reviewString);
    console.log(this.review);
    this.rService.addReview(this.review).subscribe(data => console.log(data));
    // console.log(this.review);
    location.reload();
  }
 
}
