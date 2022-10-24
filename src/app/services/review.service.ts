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
   // inject HttpClient in ReviewService class

  constructor(private http: HttpClient) { 

  }
   // create addReview method which accep Review object and use to add that Review object in database
 /**
     * This method is used to add Review object to the  database
     * @param reviewr This is the first paramter to addReviw method
     * @return Nothing
     */
   addReview( reviewr:Review): void {
  
  this.http.post<Review>(environment.baseUrl+"/review/", 
   reviewr,{headers: environment.headers, withCredentials: environment.withCredentials}).subscribe(()=>  console.log("review added"));
   
  }
  
   
  getUser():  Observable<User> {
    return this.http.get<User>(environment.baseUrl+"/userInfo/");
  }
   // create getReview method which pass id parameter and get array of Reviews
  //getReview(id: number): Observable<Review[]> {
  //  return this.http.get<Review[]>(environment.baseUrl+"/review/"+id);
 // }
  
 
// Define getReview method which pass number parameter and return array of Reviews filtered by product id
/**
     * This method is used to get array of  Review object from   database by use product_id
     * @param id This is the first paramter to addReviw method
     * @return Review[] This return Review array
 */
getAllReviews(id:number ) : Observable<Review[]> {
  return this.http.get<Review[]>(environment.baseUrl+"/review/" +  id);
    
}
  

}
