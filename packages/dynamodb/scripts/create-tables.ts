import {
  CreateTableCommand,
  CreateTableCommandInput,
} from '@aws-sdk/client-dynamodb';
import {dynamodb} from '../lib';

export async function createPhotosTable() {
  const params: CreateTableCommandInput = {
    TableName: 'Photos',
    KeySchema: [
      {AttributeName: 'id', KeyType: 'HASH'},
      {AttributeName: 'orderCount', KeyType: 'RANGE'},
    ],
    AttributeDefinitions: [
      {AttributeName: 'id', AttributeType: 'S'},
      {AttributeName: 'orderCount', AttributeType: 'N'},
    ],
    BillingMode: 'PAY_PER_REQUEST',
    StreamSpecification: {
      StreamEnabled: false,
    },
  };
  return dynamodb.send(new CreateTableCommand(params));
}
