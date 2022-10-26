import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DarkModeToggle } from '../components/dark-mode-toggle.component';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authUrl: string = `${environment.baseUrl}/auth`;
  loggedIn: boolean = false;

    /**
     * This constructor is used to inject  HttpClient 
     * @param http This is the first parameter to constructor method
     * @return Nothing.
     */

  constructor(private http: HttpClient ) { }
 
  /**
     * This method is used to get  user object form database by email and password
     * @param email This is the first parameter to login method
     * @param password This is the second parameter to login method
     * @return Observable<any> This returns  cart object.
     */
  login(email: string, password: string): Observable<any> {
    const payload = {email:email, password:password};
    return this.http.post<any>(`${this.authUrl}/login`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
  }

   /**
     * This method is used to log out by remove user from session  
     * @return Nothing
     */
  logout(): void{
    this.http.post(`${this.authUrl}/logout`, null);
  }
    
    /**
     * This method is used to save  user object in database 
     * @param firstName This is the first parameter to register method
     * @param lastName This is the second parameter to register method
     * @param email This is the third parameter to register method
     * @param password This is the fourth parameter to register method
     * @return Observable<any> This returns  user object.
     */
  register(firstName: string, lastName: string, email: string, password: string): Observable<any> {
    const payload = {firstName: firstName, lastName: lastName, email: email, password: password};
    return this.http.post<any>(`${this.authUrl}/register`, payload, {headers: environment.headers});
  }
  
   /**
     * This method is used to get  user object form database by use session
     * @return Observable<User> This returns  user object.
     */
  getUserInfo(): Observable<User>{
    return this.http.get<User>(environment.baseUrl +"/auth/user", {
      headers: environment.headers,
      withCredentials: environment.withCredentials
    });
  }
}
