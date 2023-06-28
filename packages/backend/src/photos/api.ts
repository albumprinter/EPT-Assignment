import fastify from 'fastify';
import {getPhotos} from '../db/photosTable';

const server = fastify({logger: process.env.NODE_ENV !== 'test'});
server.get('/photos', async () => {
  const {Items = []} = await getPhotos();
  return Items;
});

export const api = server;
