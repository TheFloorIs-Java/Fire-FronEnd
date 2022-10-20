import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import {datepickerAnimation} from "ngx-bootstrap/datepicker/datepicker-animations";
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { User } from 'src/app/models/user';
import { CartItem } from 'src/app/models/cartitem';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  product_id!: number;
  subscription!: Subscription;
  // newCart: Cart = {
  //   cartCount: 0, products: [], totalPrice: 0.0
  // }


  gottenCart!: CartItem[];

  constructor(private pService: ProductService, private route: ActivatedRoute, private cService: CartService) {
    this.route.queryParams.subscribe(data => {
      this.product_id = data['id']
    });
    this.subscription = this.cService.getCart().subscribe(
      (cart) => {
        //this.newCart = cart
      }
    );
  }
  
  ngOnInit(): void {
    console.log(this.product_id+ "printed in ngONInit");
    this.getProduct(this.product_id);
    this.cService.getCartFromAPI().subscribe(cartitems => {
      //this.gottenCart = cartitems;
      console.log("This is the cart" +cartitems);
    });
  }

  getProduct(productId: number){
    this.pService.getSingleProduct(productId).subscribe(data => {
      this.product = data;
      console.log(data);
    })
  }

  addToCart(product: Product) {
    // if (this.newCart.products.find(item => item.product.id === product.id)) {
    //   console.log("Element found, updating quantity");
    //   this.newCart.products[this.newCart.products.findIndex(item => item.product.id === product.id)].quantity++;
    // } else {
    //   console.log("Element not found, adding to cart");
    //   this.newCart.products.push({
    //     product: product, quantity: 1});
    // }
    // this.newCart.cartCount++;
    // this.newCart.totalPrice += product.price;
    // this.cService.setCart(this.newCart);
    this.cService.postCartToAPI(product).subscribe(data => {
      console.log(data);
      this.cService.setCartCountRef();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
   }

}
