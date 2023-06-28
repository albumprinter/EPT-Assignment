import * as lib from '../lib';
import {api} from './api';

jest.mock('../lib', () => {
  return {
    getPhotos: jest.fn(),
  };
});

const mockPhotos = {
  Items: [
    {
      orderCount: {N: '350'},
      id: {S: 'image_10'},
      category: {S: 'poster'},
      extra: {M: {texture: {S: 'canvas'}}},
    },
    {
      orderCount: {N: '3000'},
      id: {S: 'image_13'},
      category: {S: 'card'},
      extra: {M: {border: {N: '5'}}},
    },
    {
      orderCount: {N: '112800'},
      id: {S: 'image_5'},
      category: {S: 'poster'},
      extra: {M: {texture: {S: 'glossy'}}},
    },
  ],
};

describe('api', () => {
  it('should respond', async () => {
    const response = await api.inject({
      method: 'GET',
      path: '/photos',
    });

    expect(response.statusCode).toBeTruthy();
  });

  it(`should respond with 200 statusCode
  And 3 photos when GET /photos`, async () => {
    jest.spyOn(lib, 'getPhotos').mockResolvedValue(mockPhotos as any);
    const {statusCode, body} = await api.inject({
      method: 'GET',
      path: '/photos',
    });

    const data = JSON.parse(body);

    expect(statusCode).toEqual(200);
    expect(data).toHaveProperty('length', 3);
  });
});
