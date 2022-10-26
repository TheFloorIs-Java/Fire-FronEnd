import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl: string = "/api/product/";

  constructor(private http: HttpClient) { }
    /**
     * This method is used to get product objects from database
     * @return Observable<Product[]> This returns  array of product objects.
     */
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.baseUrl+this.productUrl, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

   /**
     * This method is used to get single product  object from database
     * @param id This is the  parameter of getSingleProduct method
     * @return Observable<Product> This returns  product object.
     */
  public getSingleProduct(id: number): Observable<Product> {
    return this.http.get<Product>(environment.baseUrl+ this.productUrl+id, {headers: environment.headers, withCredentials: environment.withCredentials});
  }



}
