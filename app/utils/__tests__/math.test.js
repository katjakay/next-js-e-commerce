import { add } from '../math';

test('add two numbers together', () => {
  expect(add(1, 1)).toBe(2);
  expect(add(100, 200)).toBe(300);
  expect(add(2, 2)).toBe(4);
});
