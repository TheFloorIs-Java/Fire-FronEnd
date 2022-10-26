import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {
 
  /**
     * This constructor is used to inject  AuthService, Router and  CartService
     * @param authService This is the first parameter to constructor method
     * @param router This is the second parameter to constructor method
     * @param cService This is the third parameter to constructor method
     * @return Nothing.
     */
  constructor(private authService: AuthService, private router: Router, //private productService: ProductService,
  private cService: CartService) { }

    /**
     * This method is used to log out and navigate to login componenet
     * @return Nothing
     */
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
  }

}
