import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './components/review/review.component';
import { DisplayReviewsComponent, ReviewStarsComponent } from './components/display-reviews/display-reviews.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatButtonModule } from "@angular/material/button";
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { PurchaseHistoryComponent } from './components/purchase-history/purchase-history.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from '@angular/material/list';
import { ProductDetailsCardComponent } from './components/product-details/product-details-card/product-details-card.component'; 
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog'; 
import {MatButtonToggleModule} from '@angular/material/button-toggle'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProductCardComponent,
    CartComponent,
    CheckoutComponent,
    ReviewComponent,
    DisplayReviewsComponent,
    DisplayProductsComponent,
    ProductDetailsComponent,
    FirstPageComponent,
    PurchaseHistoryComponent,
    ProductDetailsCardComponent,
    ReviewStarsComponent,
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatTableModule,
        MatSortModule,
        MatInputModule,
        MatPaginatorModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatListModule,
        MatDialogModule,
        MatButtonToggleModule,
    ],
  providers: [{
    provide: MatDialogRef,
    useValue: {}
  }],
  bootstrap: [AppComponent]
})
export class AppModule {

}

