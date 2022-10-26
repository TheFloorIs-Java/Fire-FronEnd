import { Address } from './address';

describe('Address', () => {
  it('should create an instance', () => {
    expect(new Address('hi','gi','hi','gi','hi','gi','hi','gi')).toBeTruthy();
  });
});
