import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart1 } from '../models/cart';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  endpointURL: String;

  /*
  * The BehaviorSubject representation of the cart used in the app.
  * Used to communicate information across non-related components via subscriptions.
  * Henceforth referred to as 'BehaviorSubject'
  */

  private cartCount = new BehaviorSubject<number>(0);

  /*
  * The Observable representation of the BehaviorSubject
  */

  private cartCount$ = this.cartCount.asObservable();

  constructor(private http: HttpClient) {
    this.endpointURL = "/api/cart";
  }


  /*
  * Return the observable of the BehaviorSubject.
  * Used for creating a subscription for certain components.
  */

  getCartCountRef():Observable<number>{
      return this.cartCount$;
  }

  /*
  * Set the BehaviorSubject's cart to a new cart.
  * Anyone subscribed to the BehaviorSubject will receive this update.
  */

  setCartCountRef(){
    console.log("in setCardCountRef")
    this.getCartCount().subscribe(data => {
      return this.cartCount.next(data);
    })
  }

  

  /**
     * This method is used to post cart to the backend 
     * @param product This is the  parameter of  postCartToAPI method
     * @return Observable<Cart1> This returns  cart object.
     */
  postCartToAPI(product: Product): Observable<Cart1> {
    return this.http.post<Cart1>(environment.baseUrl + this.endpointURL+"/add", product,
        {
          headers: environment.headers,
          withCredentials: environment.withCredentials
        });
  }

   /**
     * This method is used to get carts from the backend 
     * @return Observable<Cart1[]> This returns array cart objects.
     */
  getCartFromAPI(): Observable<Cart1[]> {
    return this.http.get<Cart1[]>(environment.baseUrl + this.endpointURL, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }
    
    /**
     * This method is used to delete cart from database by id
     * @param id This is the  parameter of  deleteCartItems method
     * @return Nothing
     */
  deleteCartItems(id : number){
    return this.http.delete(environment.baseUrl + this.endpointURL + "/" + id, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }
  
  /**
     * This method is used to delete all cart from database 
    * @return Nothing
     */
  deleteAllCartItems(){
    return this.http.delete(environment.baseUrl + this.endpointURL, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }
    /**
     * This method is used to get the number of the carts from database
     * @return Observable<number> This returns  number of the carts.
     */
  getCartCount():Observable<number>{
    return this.http.get<number>(environment.baseUrl + this.endpointURL + "/count", {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }
    /**
     * This method is used to get the total prices of the cart from database
     * @return Observable<number> This returns  the total prices of the cart.
     */
  getTotalPrice():Observable<number> {
    return this.http.get<number>(environment.baseUrl + this.endpointURL + "/total", {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }
}

