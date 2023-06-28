import {ExecuteStatementCommand} from '@aws-sdk/lib-dynamodb';
import {PhotoCommandOutput} from '../photos/validation';
import {partiQL} from './dynamodb-client';

// get all photos
export async function getPhotos(command: ExecuteStatementCommand) {
  return partiQL.send(command) as Promise<PhotoCommandOutput>;
}
