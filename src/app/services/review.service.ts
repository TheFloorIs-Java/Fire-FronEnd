import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
   product !: Product ;
   reviewrs !: Review;
  constructor(private http: HttpClient) { 

  }

  addReview( reviewr:Review): void {
  this.http.post<any>("http://localhost:8080/review/", 
   { review:reviewr}).subscribe(()=>  console.log("review added"));
   
  }
  
  
  

  

}
