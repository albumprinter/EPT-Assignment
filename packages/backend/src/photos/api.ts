import fastify from 'fastify';
import {getPhotos} from '../lib';

const server = fastify({logger: true});
server.get('/photos', async () => {
  const result = await getPhotos();
  return result.Items;
});

export const api = server;
