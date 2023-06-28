import {ExecuteStatementCommand} from '@aws-sdk/lib-dynamodb';
import {PhotoCommandOutput} from '../photos/validation';
import {partiQL} from './dynamodb-client';

// run command to photos
export async function getPhotos(command: ExecuteStatementCommand) {
  const {Items = []} = await partiQL.send(command);

  return Items as PhotoCommandOutput['Items'];
}
