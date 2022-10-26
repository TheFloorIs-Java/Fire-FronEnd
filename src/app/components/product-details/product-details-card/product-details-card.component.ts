import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/models/product';
import { ReviewComponent } from '../../review/review.component';

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrls: ['./product-details-card.component.css']
})
export class ProductDetailsCardComponent implements OnInit {

  @Input() product!: Product;
  @Output() addToCartClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() displayReviewPostClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.addToCartClick.emit();

  }

  /*
  * Emit to product-details to set review posting to its opposite status.
  */
  displayReviewPost() {
    this.displayReviewPostClick.emit();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(ReviewComponent, {
      width: 'auto',
      height: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

