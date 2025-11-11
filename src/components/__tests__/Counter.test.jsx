import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

test('render initial count', () => {
  render(<Counter />);
  expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 0');
});

test('increments count when Increment clicked', () => {
  render(<Counter />);
  const incButton = screen.getByText('Increment');
  const countText = screen.getByText(/count:/i);
  fireEvent.click(incButton);
  expect(countText).toHaveTextContent('Count: 1');
});

test('decrements count when Decrement clicked', () => {
  render(<Counter />);
  const decButton = screen.getByText('Decrement');
  const countText = screen.getByText(/count:/i);
  fireEvent.click(decButton);
  expect(countText).toHaveTextContent('Count: -1');
});
