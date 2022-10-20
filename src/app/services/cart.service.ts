import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Cart, Cart1} from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  endpointURL: String;

  constructor(private http: HttpClient) {
    this.endpointURL = "/api/cart";
  }

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

  private cart = new BehaviorSubject<Cart1>({
    id: 0,
    product: undefined,
    user: undefined,
    total_price: 0.00,
    quantity: 0
  });

  private cartCount = new BehaviorSubject<number>(0);

  /*
  * The Observable representation of the BehaviorSubject
  */
  private _cart$ = this._cart.asObservable();
  private cart$ = this.cart.asObservable();
  private cartCount$ = this.cartCount.asObservable();
  /*
  * Return the observable of the BehaviorSubject.
  * Used for creating a subscription for certain components.
  */
  getCart(): Observable<Cart> {
    return this._cart$;
  }

  getCart$(): Observable<Cart1>{
    return this.cart$;
  }

  getCartCountRef():Observable<number>{
    return this.cartCount$;
  }

  /*
  * Set the BehaviorSubject's cart to a new cart.
  * Anyone subscribed to the BehaviorSubject will receive this update.
  */
  setCart(latestValue: Cart) {
    return this._cart.next(latestValue);
  }

  setCart$(latestValue: Cart1){
    return this.cart.next(latestValue);
  }

  setCartCountRef(){
    console.log("in setCardCountRef")
    this.getCartCount().subscribe(data => {
      return this.cartCount.next(data);
    })
  }

  /*
  * Post the cart to the backend for the current user.
  */
  postCartToAPI(product: Product): Observable<Cart1> {
    return this.http.post<Cart1>(environment.baseUrl + this.endpointURL+"/add", product,
        {
          headers: environment.headers,
          withCredentials: environment.withCredentials
        });
  }


  getCartFromAPI(): Observable<Cart1[]> {
    return this.http.get<Cart1[]>(environment.baseUrl + this.endpointURL, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }

  deleteCartItems(id : number){
    return this.http.delete(environment.baseUrl + this.endpointURL + "/" + id, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }

  deleteAllCartItems(){
    return this.http.delete(environment.baseUrl + this.endpointURL, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }

  getCartCount():Observable<number>{
    return this.http.get<number>(environment.baseUrl + this.endpointURL + "/count", {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }

}

