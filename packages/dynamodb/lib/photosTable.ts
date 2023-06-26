import type {
  AttributeValue,
  ScanCommandInput,
} from '@aws-sdk/client-dynamodb';
import { ScanCommand } from '@aws-sdk/client-dynamodb';
import dynamodb from './dynamodb-client';

const tableName = `Post`;

export type PhotoExtraEntity = {
  rotate?: number;
  border?: number;
  texture?: string;
};

export type PhotoEntity = {
  id: string;
  orderCount: number;
  category: string;
  extra?: PhotoExtraEntity;
};

export type DynamoPhotoEntity = {
  id: AttributeValue;
  orderCount: AttributeValue;
  category: AttributeValue;
  extra?: { M: AttributeValue };
};

export async function getPhotos(options?: {
  limit?: number;
  startkey?: string;
}) {
  const { limit, startkey } = options || {};
  const params: ScanCommandInput = {
    TableName: tableName,
    ConsistentRead: false,
    ProjectionExpression: `id, orderCount, category, extra`,
  };
  if (limit) {
    params.Limit = limit;
  }
  if (startkey) {
    params.ExclusiveStartKey = {
      id: { S: startkey },
    };
  }
  return dynamodb.send(new ScanCommand(params));
}
