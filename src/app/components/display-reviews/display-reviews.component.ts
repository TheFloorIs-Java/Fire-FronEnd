import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-display-reviews',
  templateUrl: './display-reviews.component.html',
  styleUrls: ['./display-reviews.component.css']
})
export class DisplayReviewsComponent implements OnInit {
  allReviews:Review[] = [];
   
  @Input()
  reviewInfo!:Review;
  constructor() { }

  ngOnInit(): void {
  }


}
