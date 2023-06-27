import {ScanCommand, ScanCommandInput} from '@aws-sdk/client-dynamodb';
import fastify from 'fastify';
import {dynamodb} from './dynamodb';

const server = fastify({logger: true});
server.get('/photos', async () => {
  const params: ScanCommandInput = {
    TableName: 'Photos',
    ConsistentRead: false,
    ProjectionExpression: 'id, orderCount, category, extra',
  };

  return dynamodb.send(new ScanCommand(params));
});

export const api = server;
