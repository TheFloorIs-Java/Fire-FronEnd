import { Payment } from './payment';

describe('Payment', () => {
  it('should create an instance', () => {
    expect(new Payment( 'name',
      'detail')).toBeTruthy();
  });
});
