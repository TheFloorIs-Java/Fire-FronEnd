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
  // @Input()
  // allReviews: Array<Review> = [];
  productInfo!: Product;
  user!: User;
  reviewInfo! : Review ;
  // @Input()
  // reviewInput : string ="";
  // @Input()
  // product_id:number = 0;
  user_id : number = 0;

  // @Input() postReview: boolean = false;
  review!: Review;
  product!: Product;
  reviewString!: string;

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

  addReview() {
    console.log(this.reviewString);
    this.review = new Review(this.product, this.reviewString);
    // this.review.product = this.product;
    // this.review.review = this.reviewString;
    console.log(this.review);
    this.rService.addReview(this.review).subscribe(data => console.log(data));
    // console.log(this.review);
    location.reload();
  }
 
}
