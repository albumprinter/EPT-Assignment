import {ExecuteStatementCommand} from '@aws-sdk/lib-dynamodb';
import {sortedByOrderCount} from '../db/commands';
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
      orderCount: '350',
      id: 'image_10',
      category: 'poster',
      extra: {
        texture: 'glossy',
        border: '5',
        rotate: '90',
      },
    },
    {
      orderCount: '3000',
      id: 'image_13',
      category: 'card',
      extra: {border: '5'},
    },
    {
      orderCount: '112800',
      id: 'image_5',
      category: 'poster',
      extra: {texture: 'glossy'},
    },
  ],
};
const mockDynamodbSend = db.partiQL.send as jest.Mock;

afterEach(jest.resetAllMocks);

beforeEach(() => mockDynamodbSend.mockResolvedValue(mockDbOutputPhotos));

test('given GET /photos then api responds', async () => {
  const response = await api.inject({
    method: 'GET',
    path: '/photos',
  });

  expect(response.statusCode).toBeTruthy();
});

test(`given GET /photos
  then api should respond with 200 statusCode
  And 3 photos
  And response data is correct`, async () => {
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

test(`given GET /photos
and sortBy query is NOT allowed
then statusCode is 400`, async () => {
  const {statusCode} = await api.inject({
    method: 'GET',
    path: '/photos',
    query: {
      sortBy: 'not-allowed',
    },
  });

  expect(statusCode).toEqual(400);
});

test(`given GET /photos
and sortBy query is "orderCount"
then statusCode is 200`, async () => {
  const {statusCode} = await api.inject({
    method: 'GET',
    path: '/photos',
    query: {
      sortBy: 'orderCount',
    },
  });

  expect(statusCode).toEqual(200);
  expect(mockDynamodbSend).toHaveBeenCalledWith(sortedByOrderCount);
});
