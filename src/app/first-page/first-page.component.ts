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

  constructor(private authService: AuthService, private router: Router, //private productService: ProductService,
  private cService: CartService) { }


  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
  ngOnInit(): void {
  }

}
