import { add } from '../src/example';
import { it, expect } from '@jest/globals';

it('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
