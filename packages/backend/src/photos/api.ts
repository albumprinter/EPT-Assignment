import {TypeBoxTypeProvider} from '@fastify/type-provider-typebox';
import Fastify from 'fastify';
import {findAll, sortedByOrderCount} from '../db/commands';
import {getPhotos} from '../db/photosTable';
import {
  PhotosQuery,
  PhotosQueryType,
  PhotosReply,
  PhotosReplyType,
} from './validation';

// Fastify is an express compatible framework with exceptional features
const server = Fastify({
  logger: process.env.NODE_ENV !== 'test',
}).withTypeProvider<TypeBoxTypeProvider>();

// validate and type check response
server.get<{
  Querystring: PhotosQueryType;
  Reply: PhotosReplyType;
}>(
  '/photos',
  {
    schema: {
      querystring: PhotosQuery,
      response: {
        200: PhotosReply,
      },
    },
  },
  async req => {
    if (req.query.sortBy === 'orderCount') {
      const {Items = []} = await getPhotos(sortedByOrderCount);

      return Items;
    }
    const {Items = []} = await getPhotos(findAll);
    return Items;
  }
);

export const api = server;
