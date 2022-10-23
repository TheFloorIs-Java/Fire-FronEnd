import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/models/review';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  product_id!: number;
  allReviews!: Review[];
  displayReviewPost: boolean = false;


  constructor(private pService: ProductService, 
    private route: ActivatedRoute, 
    private cService: CartService,
    private rService: ReviewService) {
    this.route.queryParams.subscribe(data => {
      this.product_id = data['id']
    });
  }
  
  ngOnInit(): void {
    this.getProduct(this.product_id);
    this.displayAllReviews();
  }

  getProduct(productId: number){
    this.pService.getSingleProduct(productId).subscribe(data => {
      this.product = data;
    })
  }

  addToCart(product: Product) {
    this.cService.postCartToAPI(product).subscribe(data => {
      this.cService.setCartCountRef();
    });
  }

  /*
  * When event is fired, (un)display the review post
  */
  setDisplayReviewPost() {
    this.displayReviewPost = !this.displayReviewPost;
  }

  /*
  *
  */
  displayAllReviews() {
    this.rService.getAllReviews(this.product_id)
      .subscribe(data => { this.allReviews = data });
  }


}
