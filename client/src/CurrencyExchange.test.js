import React from 'react';
import { render } from '@testing-library/react';
import CurrencyExchange from './CurrencyExchange';

test('renders learn react link', () => {
  const { getByText } = render(<CurrencyExchange />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
