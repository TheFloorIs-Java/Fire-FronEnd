import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
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
  toggleModal: boolean = false;

    /**
     * This constructor is used to inject  ProductService, ActivatedRoute, CartService and ReviewService
     * @param pService This is the first parameter to constructor method
     * @param route This is the second parameter to constructor method
     * @param cService This is the third parameter to constructor method
     * @param rService This is the fourth parameter to constructor method
     * @return Nothing.
     */
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
    // this.displayAllReviews();
  } 
  
  /**
  * This method is used to get product from database by id
  * @param productId This is the  parameter of getProduct method
  * @return Nothing
  */
   
  getProduct(productId: number){
    this.pService.getSingleProduct(productId).subscribe(data => {
      this.product = data;
    })
  }
  
  /**
  * This method is used to add product to database 
  * @param product This is the  parameter of  addToCart method
  * @return Nothing
  */
  addToCart(product: Product) {
    this.cService.postCartToAPI(product).subscribe(data => {
      this.cService.setCartCountRef();
    });
  }

  /**
  * This method is used to (un)display the review post  When event is fired
  * @return Nothing
  */
  setDisplayReviewPost() {
    this.toggleModal = !this.toggleModal;
  }

  /**
  * This method is used to get all reviews from database 
  * @return Observable<Review[]> This returns array of review objects
  */
  displayAllReviews(): Observable<Review[]> {
    return this.rService.getReviewsForProduct(this.product_id);
  }

}
