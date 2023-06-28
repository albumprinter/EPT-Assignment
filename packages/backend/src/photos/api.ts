import {TypeBoxTypeProvider} from '@fastify/type-provider-typebox';
import Fastify from 'fastify';
import {getPhotos} from '../db/photosTable';
import {PhotosQuery, PhotosReply, PhotosReplyType} from './validation';

// Fastify is an express compatible framework with exceptional features
const server = Fastify({
  logger: process.env.NODE_ENV !== 'test',
}).withTypeProvider<TypeBoxTypeProvider>();

// validate and type check response
server.get<{Reply: PhotosReplyType}>(
  '/photos',
  {
    schema: {
      querystring: PhotosQuery,
      response: {
        200: PhotosReply,
      },
    },
  },
  async () => {
    const {Items = []} = await getPhotos();
    return Items;
  }
);

export const api = server;
