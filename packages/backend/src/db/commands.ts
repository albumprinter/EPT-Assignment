import {ExecuteStatementCommand} from '@aws-sdk/lib-dynamodb';
import {PhotosQueryTextureType} from '../photos/validation';
export const tableName = 'Photos';

// find all photos query
export const findAll = new ExecuteStatementCommand({
  Statement: `SELECT * FROM ${tableName}`,
  ConsistentRead: true,
});

// find all photos sorted by order count
export const sortedByOrderCount = new ExecuteStatementCommand({
  Statement: `SELECT * FROM ${tableName} ORDER BY orderCount ASC`,
  ConsistentRead: true,
});

// filter by texture
export const filterByTexture = (texture: PhotosQueryTextureType) =>
  new ExecuteStatementCommand({
    Statement: `SELECT * FROM ${tableName} WHERE extra.texture=?`,
    Parameters: [texture],
    ConsistentRead: true,
  });
