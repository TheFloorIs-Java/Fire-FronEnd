import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  product_id!: number;
  subscription!: Subscription;

  constructor(private pService: ProductService, private route: ActivatedRoute, private cService: CartService) {
    this.route.queryParams.subscribe(data => {
      this.product_id = data['id']
    });
  }
  
  ngOnInit(): void {
    console.log(this.product_id+ "printed in ngONInit");
    this.getProduct(this.product_id);
  }

  getProduct(productId: number){
    this.pService.getSingleProduct(productId).subscribe(data => {
      this.product = data;
      console.log(data);
    })
  }

  addToCart(product: Product) {
    this.cService.postCartToAPI(product).subscribe(data => {
      console.log(data);
      this.cService.setCartCountRef();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
   }

}
