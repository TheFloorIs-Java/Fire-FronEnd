import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart';
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
  private _cart = new BehaviorSubject<Cart>({
    cartCount: 0,
    products: [],
    totalPrice: 0.00
  });

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
  * Set the BehaviorSubject's cart to a new cart.
  * Anyone subscribed to the BehaviorSubject will receive this update.
  */
  setCart(latestValue: Cart) {
    return this._cart.next(latestValue);
  }

  /*
  * Post the cart to the backend for the current user.
  */
  postCartToAPI(): void {
    this.http.post<Cart>(environment.baseUrl, {

    });
  }


  getCartFromAPI(): Observable<Cart> {
    return this.http.get<Cart>(environment.baseUrl);
  }

}

