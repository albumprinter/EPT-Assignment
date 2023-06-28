import {ExecuteStatementCommand} from '@aws-sdk/lib-dynamodb';
import * as db from '../db/dynamodb-client';
import {api} from './api';

jest.mock('../db/dynamodb-client', () => {
  return {
    partiQL: {send: jest.fn()},
  };
});

const mockDbOutputPhotos = {
  Items: [
    {
      orderCount: {N: '350'},
      id: {S: 'image_10'},
      category: {S: 'poster'},
      extra: {
        M: {
          texture: {S: 'glossy'},
          border: {N: '5'},
          rotate: {N: '90'},
        },
      },
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
const mockDynamodbSend = db.partiQL.send as jest.Mock;

describe('api', () => {
  beforeEach(jest.resetAllMocks);

  it('should respond', async () => {
    const response = await api.inject({
      method: 'GET',
      path: '/photos',
    });

    expect(response.statusCode).toBeTruthy();
  });

  it(`should respond with 200 statusCode
  And 3 photos when GET /photos
  And response data is correct`, async () => {
    mockDynamodbSend.mockResolvedValue(mockDbOutputPhotos);

    const {statusCode, body} = await api.inject({
      method: 'GET',
      path: '/photos',
    });

    const data = JSON.parse(body);

    expect(statusCode).toEqual(200);
    expect(data).toHaveProperty('length', 3);
    expect(mockDynamodbSend).toHaveBeenCalledWith(
      expect.any(ExecuteStatementCommand)
    );
    expect(data[0]).toEqual(
      expect.objectContaining({
        id: 'image_10',
        orderCount: expect.any(Number),
        category: expect.any(String),
      })
    );
    expect(data[0]).toHaveProperty(
      'extra',
      expect.objectContaining({
        texture: expect.any(String),
        border: expect.any(Number),
        rotate: expect.any(Number),
      })
    );
  });
});
