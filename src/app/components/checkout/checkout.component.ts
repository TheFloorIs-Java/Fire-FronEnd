import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import {Cart1} from "../../models/cart";
import {PurchaseService} from "../../services/purchase.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products: {
    id?: number,
    quantity?: number
  }[] = [];
  totalPrice!: number;
  cartProducts: Product[] = [];
  cart!: Cart1[];
  finalProducts: {id: number, quantity: number}[] = []; 

  checkoutForm = new UntypedFormGroup({
    fname: new UntypedFormControl('', Validators.required),
    lname: new UntypedFormControl('', Validators.required),
    cardName: new UntypedFormControl('', Validators.required),
    detail: new UntypedFormControl('', Validators.required),
    addOne: new UntypedFormControl('', Validators.required),
    addTwo: new UntypedFormControl(''),
    city: new UntypedFormControl('', Validators.required),
    state: new UntypedFormControl('', Validators.required),
    zipCode: new UntypedFormControl('', Validators.required),
    country: new UntypedFormControl('', Validators.required)
  });

  constructor( private router: Router, private cService: CartService, private purchase: PurchaseService, private snackBar: MatSnackBar) { }

  /**
     * This constructor is used to inject  Router, CartService and PurchaseService
     * @param router This is the first parameter to constructor method
     * @param cService This is the second parameter to constructor method
     * @param purchase This is the third parameter to constructor method
     * @return Nothing.
     */


  ngOnInit(): void {
    this.getCart();
  }


  /**
     * This method is used to get cart from database
     * @return Nothing
    */
  getCart(){
    this.cService.getCartFromAPI().subscribe(cart =>{
      this.cart = cart;
      this.cService.getTotalPrice().subscribe(price => {
          this.totalPrice = price;
          console.log(this.totalPrice);
      });
    });
  }

  /**
     * This method is used to add purchase to database
     * @return Nothing
    */
  onSubmit(): void {
    for (let crt of this.cart){
      this.products.push(
          {
            id: crt.product?.id,
            quantity: crt.quantity
          }
      )
    }
    this.purchase.purchase(this.products).subscribe((product) => {
      this.router.navigate(['/home']);
      console.log("purchase confirmed")
      this.snackBar.open("Purchase Successful", "OK", {
        verticalPosition: "top",
        duration: 3000
      })

    },
    error => window.alert("purchase unsuccessful: 'One of the items is not in stock'"));
  }

}
