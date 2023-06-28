import {PhotoCommandOutput, PhotosReplyType} from './types';

// parse db output into appropriate API response
export const parseDbOutput = (
  photos: PhotoCommandOutput['Items'] = []
): PhotosReplyType => {
  return photos.map(photo => {
    return {
      id: photo.id.S,
      category: photo.category.S,
      orderCount: photo.orderCount.N,
      extra: {
        border: photo.extra?.M.border?.N,
        texture: photo.extra?.M.texture?.S,
        rotate: photo.extra?.M.rotate?.N,
      },
    };
  });
};
