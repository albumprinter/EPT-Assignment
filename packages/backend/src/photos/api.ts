import fastify from 'fastify';

const server = fastify({logger: true});
server.get('/photos', () => {
  return {hello: 'world'};
});

export const api = server;
