import { api } from './api';

describe('api', () => {
  it(`should respond`, async () => {
    const response = await api.inject({
      method: 'GET',
      path: '/photos',
    });

    expect(response.statusCode).toBeTruthy();
  });
});
