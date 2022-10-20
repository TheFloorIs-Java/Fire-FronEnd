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
  constructor(private http: HttpClient) { 

  }

  addReview( reviewr:Review): void {
  // this.http.post<Review>("http://localhost:8080/review/", 
  this.http.post<Review>(environment.baseUrl+"/review/", 
   reviewr,{headers: environment.headers, withCredentials: environment.withCredentials}).subscribe(()=>  console.log("review added"));
   
  }


  getUser():  Observable<User> {
    return this.http.get<User>(environment.baseUrl+"/userInfo/");
  }

  getReview(id: number): Observable<Review[]> {
    return this.http.get<Review[]>(environment.baseUrl+"/review/"+id);
  }
  
 
  
getAllReviews(id:number ) : Observable<Review[]> {
  return this.http.get<Review[]>(environment.baseUrl+"/review/" +  id);
  //.subscribe(data=> {this.allReviews =data ; console.log(this.allReviews)});
  
}
  

}
