import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-reviews',
  templateUrl: './display-reviews.component.html',
  styleUrls: ['./display-reviews.component.css']
})
export class DisplayReviewsComponent implements OnInit {
  @Input()
  product!: Product;
  @Input()
  product_id: number = 0;

  @Input()
  reviewInfo!:Review;
  @Input()
  allReviews$!: Observable<Review[]>;
  
  constructor(private http: HttpClient,
    private pService: ProductService,
     private route: ActivatedRoute,
     private rService: ReviewService)  { 
    // this.route.queryParams.subscribe(data => {
    //   this.product_id = data['id']
    // });
    
    
  }

  ngOnInit(): void {
    // this.product = new Product(this.product_id,"",0, "", 0, "" ) ;
    // console.log("This product's id is " + this.product.id);
    // console.log(this.product);
    // this.rService.getReviewsForProduct(this.product.id).subscribe(data=> { 
    //   this.allReviews= data ;
    //   console.log(this.allReviews);
    // });
    
    // this.rService.getReviewsForProduct(this.product_id)
    //   .subscribe(data => this.allReviews = data)

  }


}
