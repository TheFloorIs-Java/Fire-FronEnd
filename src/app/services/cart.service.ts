import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartitem';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  /*
  * The BehaviorSubject representation of the cart used in the app.
  * Used to communicate information across non-related components via subscriptions.
  * Henceforth referred to as 'BehaviorSubject'
  */
  // private _cart = new BehaviorSubject<Cart>({
  //   cartCount: 0,
  //   products: [],
  //   totalPrice: 0.00
  // });

  private _cart = new BehaviorSubject<Cart>({
    cartCount: 0,
    products: [],
    totalPrice: 0.00
  });

  private cartUrl: string = "/api/cart";

  /*
  * The Observable representation of the BehaviorSubject
  */
  private _cart$ = this._cart.asObservable();

  /*
  * Return the observable of the BehaviorSubject.
  * Used for creating a subscription for certain components.
  */
  getCart(): Observable<Cart> {
    return this._cart$;
  }

  /*
  * After posting to the cart was done,
  * Add the 
  * Set the BehaviorSubject's cart to a new cart.
  * Anyone subscribed to the BehaviorSubject will receive this update.
  */
  setCart(latestValue: Cart) {

    return this._cart.next(latestValue);
  }

  /*
  * Post the cart to the backend for the current user.
  */
  postCartToAPI(productItem: CartItem): void {
    this.http.post<Cart>(environment.baseUrl+this.cartUrl, {
      product: productItem.product, totalPrice: productItem.totalPrice, quantity: productItem.quantity
    });
  }


  /*
  * Get the list of the cart items from the API
  * Intended to be used privately
  */
  getCartItemsFromAPI(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(environment.baseUrl+this.cartUrl, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

}

