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
   allReviews : Review[] = [];
  constructor(private http: HttpClient) { 

  }

  addReview( reviewr:Review): void {
  this.http.post<any>(environment.baseUrl+"/review", 
   {reviewr}).subscribe(()=>  console.log("review added"));
   
  }
  
 
  
getAllReviews(id:number ) : Observable<Review[]> {
  return this.http.get<Review[]>(environment.baseUrl+"/review/" +  id);
  //.subscribe(data=> {this.allReviews =data ; console.log(this.allReviews)});
  
}
  

}
