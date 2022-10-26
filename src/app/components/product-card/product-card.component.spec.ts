import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
let httpMock: HttpTestingController;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations: [ ProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpMock= TestBed.get(HttpTestingController);
    
  });

  it('should not create ', () => {
    expect(component).toBeTruthy();
  });
});
