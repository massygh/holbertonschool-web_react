import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Holberton School header', () => {
  render(<App />);
  const header = screen.getByText(/School dashboard/i);
  expect(header).toBeInTheDocument();
});
