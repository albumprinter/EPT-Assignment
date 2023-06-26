import dynamodb from './dynamodb-client';

export { getPhotos } from './photosTable';
export type { DynamoPhotoEntity, PhotoEntity } from './photosTable';
export default dynamodb;
