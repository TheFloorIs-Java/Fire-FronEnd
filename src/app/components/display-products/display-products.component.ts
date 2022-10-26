import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  allProducts: Product[] = [];
  
  /**
     * This constructor is used to inject   ProductService
     * @param productService This is the first parameter to constructor method
     * @return Nothing.
     */
  constructor(private productService: ProductService) { }
   
  /**
     * This method is used to get products from database 
     * @return Nothing
    */

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (resp) => this.allProducts = resp,
      (err) => console.log(err),
      () => console.log("Products Retrieved")
    );
  }

}
