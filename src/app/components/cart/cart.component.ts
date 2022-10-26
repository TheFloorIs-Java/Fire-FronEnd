import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import {MatTableDataSource} from "@angular/material/table";
import {Cart1} from "../../models/cart";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayedColumns: string[] = ['name', 'quantity', 'total_price'];
  dataSource!: MatTableDataSource<Cart1>;
  cart!: Cart1[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  /**
     * This constructor is used to inject  ProductService, Router and CartService
     * @param productService This is the first parameter to constructor method
     * @param router This is the second parameter to constructor method
     * @param cService This is the third parameter to constructor method
     * @return Nothing.
   */
  constructor(private productService: ProductService, private router: Router, private cService: CartService) {

  }

  ngOnInit(): void {
    this.getCartItem();
  }
  
   /**
     * This method is used to cart object from database 
     * @return Nothing
   */
  getCartItem(){
    this.cService.getCartFromAPI().subscribe(cart => {
      this.dataSource = new MatTableDataSource<Cart1>(cart);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.cart = cart;
      // @ts-ignore
      this.dataSource.sortingDataAccessor = (cart, sortHeaderId) =>{
        switch (sortHeaderId) {
          case 'name': return cart.product?.name;
          case 'quantity': return cart.quantity;
          case 'total_price': return cart.total_price;
          default: return cart.product;
        }
      }
    });
  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**
   * this method deletes each individual item from the cart itself.
   * @param id the item selected to be deleted
   * @return Nothing
   */
  deleteItem(id: number) {
    this.cService.deleteCartItems(id).subscribe(() => {
      this.cService.getCartFromAPI().subscribe(cart => {
        this.dataSource = new MatTableDataSource<Cart1>(cart);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      this.cService.setCartCountRef();

    })
  }

 /**
   * this method deletes cart items form database.
   * @return Nothing
   */
  emptyCart() {
    this.cService.deleteAllCartItems().subscribe(() => {
      this.cService.setCartCountRef();
      this.router.navigate(["/home"]);
    })
  }

}
