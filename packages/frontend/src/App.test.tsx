import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders App displays images from API', async () => {
  render(<App />);

  await waitForElementToBeRemoved(screen.queryByText(/Loading/i));

  const images = screen.getAllByRole('img');
  expect(images[0]).toBeInTheDocument();
  expect(images).toHaveProperty('length', 3);
});
