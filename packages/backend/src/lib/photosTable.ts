import type {AttributeValue} from '@aws-sdk/client-dynamodb';
import {ExecuteStatementCommand} from '@aws-sdk/lib-dynamodb';
import {partiQL} from './dynamodb-client';

const tableName = 'Photos';

export const findAllPhotos = new ExecuteStatementCommand({
  Statement: `SELECT * FROM ${tableName}`,
  ConsistentRead: true,
});

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
  extra?: {M: AttributeValue};
};

export async function getPhotos() {
  return partiQL.send(findAllPhotos);
}
