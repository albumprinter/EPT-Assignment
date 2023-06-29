import {
  act,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from './App';

test('when the App renders then it displays images from API', async () => {
  render(<App />);

  await waitForElementToBeRemoved(screen.queryByText(/Loading/i));

  const images = screen.getAllByRole('img');
  expect(images[0]).toBeInTheDocument();
  expect(images).toHaveProperty('length', 3);
});

test(`when the App renders
and the sort by Order count button is clicked
and the request is made
then the sort by Order count button is disabled`, async () => {
  render(<App />);

  userEvent.click(screen.getByRole('button', {name: /Sort by order count/i}));

  await waitFor(() =>
    expect(
      screen.getByRole('button', {name: /Sort by order count/i})
    ).toBeDisabled()
  );
});

test(`when the App renders
and the filter by glossy texture button is clicked
and the request is made
then the filter by glossy texture button is disabled`, async () => {
  render(<App />);

  userEvent.click(screen.getByRole('button', {name: /Filter by glossy/i}));

  await waitFor(() =>
    expect(
      screen.getByRole('button', {name: /Filter by glossy/i})
    ).toBeDisabled()
  );
});
