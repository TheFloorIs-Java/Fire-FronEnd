import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { DarkModeToggle } from '../dark-mode-toggle.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  cartCount!: number;
  subscription!: Subscription;

  constructor(private authService: AuthService, private router: Router, //private productService: ProductService,
              private cService: CartService) { 
                this.detectColorScheme
              }
  
  ngOnInit(): void {
    this.subscription = this.cService.getCart().subscribe(
      (cart) => this.cartCount = cart.cartCount
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

 darkMode= false;  //for dark mode toggle button
  detectColorScheme(){
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark').matches){  //sets button to toggle between either dark or light mode
      this.darkMode=true;
      document.documentElement.setAttribute('data-theme',this.darkMode? 'dark':'light');
    }
  }
  toggleTheme(){
    this.darkMode= !this.darkMode;
    document.documentElement.setAttribute('data-theme',this.darkMode? 'dark':'light');
  } 
}
