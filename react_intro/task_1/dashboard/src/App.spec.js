// src/App.spec.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header with text "School dashboard"', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading', { name: /school dashboard/i });
  expect(headerElement).toBeInTheDocument();
});

test('renders the 2 paragraphs with correct text', () => {
  render(<App />);
  expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/copyright/i)).toBeInTheDocument();
});

test('renders an image with alt text', () => {
  render(<App />);
  const logo = screen.getByAltText(/holberton logo/i);
  expect(logo).toBeInTheDocument();
});
