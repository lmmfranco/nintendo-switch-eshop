import { EshopError } from '../src';

describe('customError', () => {
  test('Error should have custom properties', () => {
    const err = new EshopError('message');

    expect(err.message).toBe('message');
    expect(err.name).toBe('EshopError');
  });
});
