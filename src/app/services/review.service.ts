import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Product } from '../models/product';
import { Review } from '../models/review';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
   //create product object
  product !: Product ;
  // create array for all review
   allReviews : Review[] = [];

   endpointURL: string;
  constructor(private http: HttpClient) { 
    this.endpointURL = "/review";
  }

   /**
     * This method is used to add review  object to database 
     * @param review This is the  parameter of addReview method
     * @return Observable<Review> This returns  review object.
     */
  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(environment.baseUrl+this.endpointURL, review,
      {headers: environment.headers, withCredentials: environment.withCredentials});
  }
  
   /**
     * This method is used to get review  objects from database 
     * @param product_id This is the parameter of getReviewsForProduct method
     * @return Observable<Review[]> This returns  array of review objects.
     */
  getReviewsForProduct(product_id: number): Observable<Review[]> {
    return this.http.get<Review[]>(environment.baseUrl+this.endpointURL+"/"+product_id,
      {headers: environment.headers, withCredentials: environment.withCredentials});
  }

}
