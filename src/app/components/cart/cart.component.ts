import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  //  deletedItem : Array<DeleteItemService> = [];
  products: { 
    product: Product,
    quantity: number
  }[] = [];
  totalPrice!: number; 
  cartCounts: number = 0;
  cartProducts: Product[] = []; 

  constructor(private productService: ProductService, private router: Router, private cService: CartService) { }

  ngOnInit(): void {
    // this.cService.getCartItemsFromAPI().subscribe(
    //   cartItems => this.products = cartItems
    // )
    this.cService.getCart().subscribe(
      (cart) => {
        this.products = cart.products; // Get the elements from the subscribed cart
        this.products.forEach(
          (element) => this.cartProducts.push(element.product) // Move each element's product to a product array.
        );
        this.totalPrice = cart.totalPrice;
      }
    );
  }

  /*
  * Subscribe to the 
  */
  // setUpCart()

  

  emptyCart(): void {
    let cart = {
      cartCount: 0,
      products: [],
      totalPrice: 0.00
    };
    this.cService.setCart(cart);
    this.router.navigate(['/home']);
  }

 // splice is a method where you add and removie array elements //
  deleteItem(id: number): void {
    for (let i = 0; i < this.products.length; i++){
      if (this.products[i].product.id == id) {
        this.totalPrice -=
          this.products[i].product.price * this.products[i].quantity;
           this.products.splice(i, 1);
          console.log(this.totalPrice);
      }
    }
   
    // this.products=this.products.filter(p => {return p!== product;})
  }

}
