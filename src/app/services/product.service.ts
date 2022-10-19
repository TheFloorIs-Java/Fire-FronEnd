import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart';



// interface deleteItem {
//   productId: number;
//   productName: String;
//   productDescription: String;
//   quantity: number;

// }

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string = "/api/product/";

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl+this.productUrl, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

  public getSingleProduct(id: number): Observable<Product> {
    return this.http.get<Product>(environment.baseUrl+ this.productUrl+id, {headers: environment.headers, withCredentials: environment.withCredentials});
  }


  public purchase(products: {id:number, quantity:number}[]): Observable<any> {
    const payload = JSON.stringify(products);
    return this.http.patch<any>(environment.baseUrl+this.productUrl, payload, {headers: environment.headers, withCredentials: environment.withCredentials})
  }
}
