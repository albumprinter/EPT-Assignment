import fastify from 'fastify';
import {getPhotos} from '../lib';

const server = fastify({logger: process.env.NODE_ENV !== 'test'});
server.get('/photos', async () => {
  const result = await getPhotos();
  return result.Items;
});

export const api = server;
