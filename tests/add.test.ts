import { add } from '../src/example';

describe('add function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  it('adds 5 + 2 to equal 7', () => {
    expect(add(5, 2)).toBe(7);
  });
});
