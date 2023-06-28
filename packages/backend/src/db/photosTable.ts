import {PhotoCommandOutput} from '../photos/types';
import {findAllPhotos} from './commands';
import {partiQL} from './dynamodb-client';

export async function getPhotos() {
  return partiQL.send(findAllPhotos) as Promise<PhotoCommandOutput>;
}
