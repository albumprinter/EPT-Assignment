import { app } from './app';

describe('app', () => {
  it(`should respond`, async () => {
    const response = await app.inject({
      method: 'GET',
      path: '/photos',
    });

    expect(response.statusCode).toBeTruthy();
  });
});
