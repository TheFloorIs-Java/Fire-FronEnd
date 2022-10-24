import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCardComponent } from './product-details-card.component';

describe('ProductDetailsCardComponent', () => {
  let component: ProductDetailsCardComponent;
  let fixture: ComponentFixture<ProductDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
