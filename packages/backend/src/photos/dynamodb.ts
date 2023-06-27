// eslint-disable-next-line node/no-unpublished-import
import * as AWS from 'aws-sdk';

const options = {
  region: 'localhost',
  endpoint: process.env.DB_CONNECTION_STRING,
};

export const dynamodb = new AWS.DynamoDB.DocumentClient(options);
