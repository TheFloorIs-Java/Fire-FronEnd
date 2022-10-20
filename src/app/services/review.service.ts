import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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
  this.http.post<any>(environment.baseUrl+"/review/", 
   { review:reviewr}).subscribe(()=>  console.log("review added"));
   
  }

  getReview(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(environment.baseUrl+"/review/"+id);
  }
  
  
  

  

}
