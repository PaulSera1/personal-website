import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Contact section header appears', () => {
  render(<App />);
  const Contact = screen.getByText(/Contact/g);
  expect(Contact).toBeInTheDocument();
});
