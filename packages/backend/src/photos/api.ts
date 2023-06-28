import {TypeBoxTypeProvider} from '@fastify/type-provider-typebox';
import Fastify from 'fastify';
import {getPhotos} from '../db/photosTable';
import {PhotosReply, PhotosReplyType} from './types';

const server = Fastify({
  logger: process.env.NODE_ENV !== 'test',
}).withTypeProvider<TypeBoxTypeProvider>();

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
    return Items;
  }
);

export const api = server;
