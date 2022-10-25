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
  
  constructor(private http: HttpClient,
    private pService: ProductService,
     private route: ActivatedRoute,
     private rService: ReviewService)  { 
    // this.route.queryParams.subscribe(data => {
    //   this.product_id = data['id']
    // });
    
    
    
  }

  ngOnInit(): void {
    this.rService.getReviewsForProduct(this.product_id)
      .subscribe(data => { 
        this.allReviews = data;
        console.log("Show a review " + this.allReviews[0].review);
        this.currentReviews = this.allReviews.slice(0, 5);
       });
    // this.currentReviews = this.allReviews.slice(0, 5);
    
  }

  onPageChange($event: any) {
      this.currentReviews =  this.allReviews.slice($event.pageIndex*$event.pageSize, $event.pageIndex*$event.pageSize + $event.pageSize);
  }

  /*
  * Assign a 'checked' class to each star for the number of stars for a review.
  */
 starChecking(score: number) {
  
 }



}

@Component({
  selector: 'review-stars',
  template: `
    <span *ngFor="let n of arrNums"
           [className]="'fa fa-star ' + isStar(n)"></span>`,
    // <span class="fa fa-star checked"></span>
    // <span class="fa fa-star checked"></span>
    // <span class="fa fa-star checked"></span>
    // <span class="fa fa-star"></span>
    // <span class="fa fa-star"></span>`,
  styleUrls: ['./display-reviews.component.css']
})
export class ReviewStarsComponent {

  @Input()
  score: number = Math.random() * 5 + 1;

  arrNums: number[] = [1, 2, 3, 4, 5];

  /*
  * Return 'checked' if current iteration is greater than or equal to score; otherwise ''
  */
  isStar(n: number): string {
    return n <= this.score ? 'checked' : '';
  }
}
