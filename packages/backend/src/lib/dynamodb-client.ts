import {DynamoDBClient, DynamoDBClientConfig} from '@aws-sdk/client-dynamodb';

const config: DynamoDBClientConfig = {
  region: process.env['AWS_REGION'] || 'eu-west-2',
  credentials: {
    accessKeyId: process.env['AWS_ACCESS_KEY'] || 'everything_is_awesome',
    secretAccessKey: process.env['AWS_SECRET_KEY'] || 'open_sesame_street!',
  },
  endpoint: process.env['DB_ENDPOINT'],
};

export const dynamodb = new DynamoDBClient(config);
