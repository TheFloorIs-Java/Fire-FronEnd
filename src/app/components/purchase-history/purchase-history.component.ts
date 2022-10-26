import {Component, OnInit, ViewChild} from '@angular/core';
import {PurchaseService} from "../../services/purchase.service";
import {Purchase} from "../../models/purchase";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Cart1} from "../../models/cart";

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  purchases!: Purchase[];
  displayedColumns: string[] = ['name', 'quantity', 'total_price', 'date'];
  dataSource!: MatTableDataSource<Purchase>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
   
  /**
     * This constructor is used to inject  PurchaseService 
     * @param purchaseService This is the first parameter to constructor method
     * @return Nothing.
     */
  constructor(private  purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.getPurchases();
  }
    /**
     * This method is used to add purchase object to database 
     * @return Nothing
     */
  getPurchases(){
    this.purchaseService.getPurchases().subscribe(purchases => {
      this.purchases = purchases;
      this.dataSource = new MatTableDataSource<Cart1>(purchases);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // @ts-ignore
      this.dataSource.sortingDataAccessor = (purchases, sortHeaderId) =>{
        switch (sortHeaderId) {
          case 'name': return purchases.product?.name;
          case 'quantity': return purchases.quantity;
          case 'total_price': return purchases.total_price;
          case 'date': return purchases.date;
          default: return purchases.product;
        }
      }
    });
  }

}
