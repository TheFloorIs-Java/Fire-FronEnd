import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { DarkModeToggle } from '../dark-mode-toggle.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges{
  logoUrl = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fseeklogo.com%2Fvector-logo%2F407471%2Frevature&psig=AOvVaw22V1zvT7A1jL0-fDszLrpd&ust=1666518566083000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPjZ-8rH8_oCFQAAAAAdAAAAABAE'
  cartCount!: number;
  subscription!: Subscription;
  
  @Input() darkMode!: boolean //for dark mode toggle button
  mode: string = "Mode"
  @Input() addItem!: number;

    /**
     * This constructor is used to inject  AuthService, Router and  CartService
     * @param authService This is the first parameter to constructor method
     * @param router This is the second parameter to constructor method
     * @param cService This is the third parameter to constructor method
     * @return Nothing.
     */
  constructor(private authService: AuthService, private router: Router,  private cService: CartService) {//private productService: ProductService,
                //this.detectColorScheme
      this.subscription = this.cService.getCartCount().subscribe(
          (count:number) => {
              this.cartCount = count;
              console.log("in ngOnInit"+ count);
          }
      );
  }
  
  ngOnInit(): void {
    // Initialize the cartCount
    // this.subscription = this.cService.getCart().subscribe(
    //   (cart) => this.cartCount = cart.cartCount
    // );
      this.subscription = this.cService.getCartCountRef().subscribe(
          (count:number) => this.cartCount = count
      );
      // this.cService.getCartCount().subscribe(data  => this.cartCount = data);
  }

  ngOnChanges(){
      // this.subscription = this.cService.getCart().subscribe(
      //     (cart) => this.cartCount = cart.cartCount
      // );
      console.log("in ngonchange");
      this.subscription = this.cService.getCartCountRef().subscribe(
          (count:number) => this.cartCount = count
      );
      //this.cService.getCartCount().subscribe(data  => this.cartCount = data);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
    /**
     * This method is used to log out and navigate to login componenet
     * @return Nothing
     */
  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }


  // detectColorScheme(){
  //
  //   if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark').matches){  //sets button to toggle between either dark or light mode
  //     this.darkMode=true;
  //     document.documentElement.setAttribute('data-theme',this.darkMode? 'dark':'light');
  //   }
  // }


  
    /**
     * This method is used to change from regular mode to dark mode
     * @return Nothing
     */
  toggleTheme(){
    this.darkMode= !this.darkMode;
    
    this.mode = this.darkMode == true ? "Dark" : "Light"
    document.documentElement.setAttribute('data-theme',this.darkMode? 'dark':'light');
  } 
}
