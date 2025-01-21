import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';

test('renders the HomePage with the correct text', () => {
  render(<HomePage />);
  expect(screen.getByText(/Welcome to Your New Web Project/i)).toBeInTheDocument();
  expect(screen.getByText(/powered by React, Vite, and Material-UI/i)).toBeInTheDocument();
});
