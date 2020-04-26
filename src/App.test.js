import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders we are making changes', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/we are making changes/i);
  expect(textElement).toBeInTheDocument();
});
