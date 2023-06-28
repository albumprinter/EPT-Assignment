import {ExecuteStatementCommand} from '@aws-sdk/lib-dynamodb';

export const tableName = 'Photos';

// find all photos query
export const findAll = new ExecuteStatementCommand({
  Statement: `SELECT * FROM ${tableName}`,
  ConsistentRead: true,
});

// find all photos sorted by order count
export const sortedByOrderCount = new ExecuteStatementCommand({
  Statement: `SELECT * FROM ${tableName} ORDER BY orderCount`,
  ConsistentRead: true,
});
