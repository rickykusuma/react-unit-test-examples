import { add, subtract, multiply, divide } from '../utils/math';

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
test('subtracts two numbers', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('multiplys two numbers', () => {
  expect(multiply(4, 5)).toBe(20);
});

test('divides two numbers', () => {
  expect(divide(20, 4)).toBe(5);
});

test('divides by zero', () => {
  expect(() => divide(5, 0)).toThrow('Cannot divide by zero');
});
