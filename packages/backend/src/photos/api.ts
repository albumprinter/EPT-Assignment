import {TypeBoxTypeProvider} from '@fastify/type-provider-typebox';
import Fastify from 'fastify';
import {filterByTexture, findAll, sortedByOrderCount} from '../db/commands';
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
    // for simplicity we assume that sorting AND filtering
    // are not done at the same time
    if (req.query.sortBy === 'orderCount') {
      return getPhotos(sortedByOrderCount);
    }
    if (req.query.texture) {
      return getPhotos(filterByTexture(req.query.texture));
    }
    return getPhotos(findAll);
  }
);

export const api = server;
