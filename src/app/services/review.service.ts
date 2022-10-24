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
   product !: Product ;
  //  reviewrs !: Review;
   allReviews : Review[] = [];

   endpointURL: string;
  constructor(private http: HttpClient) { 
    this.endpointURL = "/review";
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(environment.baseUrl+this.endpointURL, review,
      {headers: environment.headers, withCredentials: environment.withCredentials});
  }
  
  getReviewsForProduct(product_id: number): Observable<Review[]> {
    return this.http.get<Review[]>(environment.baseUrl+this.endpointURL+"/"+product_id,
      {headers: environment.headers, withCredentials: environment.withCredentials});
  }

}
