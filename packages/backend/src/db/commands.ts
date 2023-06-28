import {ExecuteStatementCommand} from '@aws-sdk/lib-dynamodb';

export const tableName = 'Photos';

// find all photos query
export const findAllPhotos = new ExecuteStatementCommand({
  Statement: `SELECT * FROM ${tableName}`,
  ConsistentRead: true,
});
