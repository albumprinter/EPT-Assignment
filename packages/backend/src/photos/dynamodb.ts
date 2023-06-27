import {DynamoDBClient} from '@aws-sdk/client-dynamodb';

const options = {
  region: 'localhost',
  endpoint: 'http://localhost:8000',
  credentials: {
    accessKeyId: process.env['AWS_ACCESS_KEY'] || '[fake]',
    secretAccessKey: process.env['AWS_SECRET_KEY'] || '[fake]',
  },
};

export const dynamodb = new DynamoDBClient(options);
