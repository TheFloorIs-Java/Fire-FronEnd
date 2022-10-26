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
  allReviews!: Review[];

  currentReviews!: Review[];
  
  /**
     * This constructor is used to inject  HttpClient, ProductService, ActivatedRoute and ReviewService
     * @param http This is the first parameter to constructor method
     * @param pService This is the second parameter to constructor method
     * @param route This is the third parameter to constructor method
     * @param rService This is the fourth parameter to constructor method
     * @return Nothing.
  */
  constructor(private http: HttpClient,
    private pService: ProductService,
     private route: ActivatedRoute,
     private rService: ReviewService)  { 
    // this.route.queryParams.subscribe(data => {
    //   this.product_id = data['id']
    // });
    
    
    
  }
    /**
     * This method is used to get  review object from database by product
     * @return Nothing
     */

  ngOnInit(): void {
    this.rService.getReviewsForProduct(this.product_id)
      .subscribe(data => { 
        this.allReviews = data;
        console.log("Show a review " + this.allReviews[0].review);
        this.currentReviews = this.allReviews.slice(0, 5);
       });
    // this.currentReviews = this.allReviews.slice(0, 5);
    
  }
    /**
     * This method is used to display  review in  page  according to page size
     * @return Nothing
     */
  onPageChange($event: any) {
      this.currentReviews =  this.allReviews.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }

}
