import { Component, Input, OnInit } from '@angular/core';
import { Review } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  allReviews:Review[] = [];
  @Input()
  reviewInfo : Review[] = []  ;
  constructor(private rService: ReviewService) { }

  ngOnInit(): void {
  }

 addReview(){
  this.rService.addReview();
 }

}
