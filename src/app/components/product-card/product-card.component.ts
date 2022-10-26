import {Component, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart1 } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import {MatDialog} from "@angular/material/dialog";
import {ReviewComponent} from "../review/review.component";


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit{

  cartCount!: number;
  products: {
    product: Product,
    quantity: number
  }[] = [];
  subscription!: Subscription;
  totalPrice: number = 0;
  @Input() productInfo!: Product;


  constructor(private productService: ProductService, private router: Router, private cService: CartService) { }
  
  ngOnInit(): void {
    // this.subscription = this.cService.getCart().subscribe(
    //   (cart) => {
    //     this.cartCount = cart.cartCount;
    //     this.products = cart.products;
    //     this.totalPrice = cart.totalPrice;
    //   }
    // );
    this.subscription = this.cService.getCartCountRef().subscribe((count:number) => this.cartCount);
  }

   /**
     * This method is used to add cart to  database 
     * @param product This is the  parameter of addToCart method
     * @return Nothing.
     */

  addToCart(product: Product): void {
    /*let newCart: Cart = {
      cartCount: 0,
      products: [],
      totalPrice: 0.00
    };
    newCart.products = this.products;
    if (newCart.products.find(elem => elem.product.id === product.id)) {
      console.log("Element found, updating quantity");
      newCart.products[newCart.products.findIndex(elem => elem.product.id === product.id)].quantity++;
    } else {
      console.log("Element not found, adding to cart");
      newCart.products.push({product: product, quantity: 1});
    }
    newCart.cartCount = this.cartCount + 1;
    newCart.totalPrice = this.totalPrice + product.price;
    this.cService.setCart(newCart);*/

    this.cService.postCartToAPI(product).subscribe(data => {
      console.log(data);
      this.cService.setCartCountRef();
    });
  }

   /**
     * This method is used to navigate to review by id 
     * @param id This is the  parameter of addReview method
     * @return Nothing.
     */
  addReview(id:number){
    this.router.navigate(['review']);

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
   
    /**
     * This method is used to navigate to product details 
     * @param productInfo This is the  parameter of goToProductDetail method
     * @return Nothing.
     */
  goToProductDetail(productInfo: Product) {
    this.router.navigate(['/product'], {queryParams: {id: productInfo.id}});
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ReviewComponent, {
      width: 'auto',
      height: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }



}
