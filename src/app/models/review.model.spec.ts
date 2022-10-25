import { Product } from './product';
import { Review } from './review';

describe('Review', () => {
  it('should create an instance', () => {
    expect(new Review(new Product(1, 'name', 1, 'description', 1, 'image'), 'p')).toBeTruthy();
  });
});
