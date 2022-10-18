import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;

  cartCount!: number;
  products: {
    product: Product,
    quantity: number
  }[] = [];
  subscription!: Subscription;
  totalPrice: number = 0;
  product_id!: number;
  @Input() productInfo!: Product;

  constructor(private pService: ProductService,
              private route: ActivatedRoute) { 
                this.route.queryParams.subscribe(data => {
                  this.product_id = data['id']
                });
              }


  

  
  ngOnInit(): void {
    this.pService.getSingleProduct(this.product_id).subscribe(data => {
      this.product = data;
    });

    // this.subscription = this.pService.getCart().subscribe(
    //   (cart) => {
    //     this.cartCount = cart.cartCount;
    //     this.products = cart.products;
    //     this.totalPrice = cart.totalPrice;
    //   }
    // );
  }

  // addToCart(product: Product): void {

  //   let inCart = false;

  //   this.products.forEach(
  //     (element) => {
  //       if(element.product == product){
  //         ++element.quantity;
  //         let cart = {
  //           cartCount: this.cartCount + 1,
  //           products: this.products,
  //           totalPrice: this.totalPrice + product.price
  //         };
  //         this.pService.setCart(cart);
  //         inCart=true;
  //         return;
  //       };
  //     }
  //   );

  //   if(inCart == false){
  //     let newProduct = {
  //       product: product,
  //       quantity: 1
  //     };
  //     this.products.push(newProduct);
  //     let cart = {
  //       cartCount: this.cartCount + 1,
  //       products: this.products,
  //       totalPrice: this.totalPrice + product.price
  //     }
  //     this.pService.setCart(cart);
  //   }
      
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
