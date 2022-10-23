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
  endpoint: String;
  constructor(private http: HttpClient) {
    this.endpoint = "/api/purchase"
  }

  makePurchase(){
    return this.http.post<Purchase>(environment.baseUrl + this.endpoint, null , {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }

  getPurchases(): Observable<Purchase[]>{
    return this.http.get<Purchase[]>(environment.baseUrl + this.endpoint, {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }
}
