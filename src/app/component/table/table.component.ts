import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Router} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {Cart1} from "../../models/cart";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
      selector: "app-table",
      templateUrl: "table.component.html",
      styleUrls: ["table.component.css"]
    })

export class TableComponent implements OnInit {

  displayedColumns: string[] = ['product', 'quantity', 'total_price'];
  dataSource!: MatTableDataSource<Cart1>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private productService: ProductService, private router: Router, private cService: CartService) {

  }

  ngOnInit(): void {
    this.getCartItem();
  }

  getCartItem(){
    this.cService.getCartFromAPI().subscribe(cart => {
      this.dataSource = new MatTableDataSource<Cart1>(cart);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
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

  emptyCart() {
    this.cService.deleteAllCartItems().subscribe(() => {
      this.cService.setCartCountRef();
      this.router.navigate(["/home"]);
    })
  }
}


