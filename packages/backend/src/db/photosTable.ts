import {PhotoCommandOutput} from '../photos/validation';
import {findAllPhotos} from './commands';
import {partiQL} from './dynamodb-client';

// get all photos
export async function getPhotos() {
  return partiQL.send(findAllPhotos) as Promise<PhotoCommandOutput>;
}
