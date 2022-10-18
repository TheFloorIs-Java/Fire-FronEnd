import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayReviewsComponent } from './display-reviews.component';

describe('DisplayReviewsComponent', () => {
  let component: DisplayReviewsComponent;
  let fixture: ComponentFixture<DisplayReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
