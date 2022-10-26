import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cart1} from "../models/cart";
import {environment} from "../../environments/environment";
import {Purchase} from "../models/purchase";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  endpoint: string;
  productURL: string;
  constructor(private http: HttpClient) {
    this.endpoint = "/api/purchase"
    this.productURL = "/api/product"
  }
  /**
     * This method is used to add purchase objects to database 
     * @return Purchase This returns  purchase object.
     */
  makePurchase(){
    return this.http.post<Purchase>(environment.baseUrl + this.endpoint, null , {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }
   
  /**
     * This method is used to get purchase objects from database 
     * @return Observable<Purchase[]> This returns  array of purchase  objects.
     */
  getPurchases(): Observable<Purchase[]>{
    return this.http.get<Purchase[]>(environment.baseUrl + this.endpoint, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }

  /**
   * This method is used to add purchase  object to database
   * @param products This is the  parameter of purchase method
   * @return Observable<any> This returns  array of product objects.
   */
  purchase(products: {id?:number, quantity?:number}[]): Observable<any> {
    const payload = JSON.stringify(products);
    return this.http.patch<any>(environment.baseUrl+this.productURL, payload, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}
