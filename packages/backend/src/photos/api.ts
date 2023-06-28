import {TypeBoxTypeProvider} from '@fastify/type-provider-typebox';
import {Static, Type} from '@sinclair/typebox';
import Fastify from 'fastify';
import {PhotoCommandOutput, getPhotos} from '../db/photosTable';

const server = Fastify({
  logger: process.env.NODE_ENV !== 'test',
}).withTypeProvider<TypeBoxTypeProvider>();

const PhotosReply = Type.Array(
  Type.Object({
    id: Type.String(),
    category: Type.String(),
    orderCount: Type.Number(),
    extra: Type.Optional(
      Type.Partial(
        Type.Object({
          texture: Type.String(),
          border: Type.Number(),
          rotate: Type.Number(),
        })
      )
    ),
  })
);

export type PhotosReplyType = Static<typeof PhotosReply>;

// parse db output into appropriate API response
const parseDbOutputPhotos = (
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

server.get<{Reply: PhotosReplyType}>(
  '/photos',
  {
    schema: {
      response: {
        200: PhotosReply,
      },
    },
  },
  async () => {
    const {Items = []} = await getPhotos();
    return parseDbOutputPhotos(Items);
  }
);

export const api = server;
