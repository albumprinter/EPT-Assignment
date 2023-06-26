import { Context, Handler } from 'aws-lambda';
import { promisify } from 'util';
import { dynamodb } from './dynamodb';

const params = {
  TableName: process.env.DYNAMODB_TABLE || '',
};
const asyncScanDb = promisify(dynamodb.scan);

export const list: Handler = async (event: any, context: Context) => {
  const result = await asyncScanDb(params);

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items),
  };
};
