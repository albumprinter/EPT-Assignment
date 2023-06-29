# EPT Assignment Photo gallery

Full-stack application created and deployed using [Serverless framework](https://www.serverless.com/) for [Albelli-Photobox assignment](https://github.com/albumprinter/EPT-Assignment).

This is a monorepo using [NPM workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) where applications are in the `packages/` folder.

## Documentation

- [Assignment](./docs/assignment/README.md)
- [Tool choices](./docs/adr/0001-tool-choices.md)
- [Architecture](./docs/ARCHITECTURE.md)
- [Serverless Framework](./docs/serverless/ARCHITECTURE.md)
- [React](./docs/REACT.md)
- [Backend](./packages/backend/README.md)
- [Frontend](./packages/frontend/README.md)
- [Deployment](./docs/DEPLOYMENT.md)

## Requirements

- [Node](https://nodejs.org/en/download) [v18.16.0](https://nodejs.org/dist/latest-v18.x/docs/api/)
- [npm v9](https://docs.npmjs.com/cli/v9/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

## Getting started

- Quick start - run frontend, backend and db in Docker.

```bash
npm run docker-up
```

- Stop all docker containers

```bash
npm run docker-down
```

- Install root, api and app packages

```bash
npm install
```

- Run tests

```bash
npm test
```

- Development mode

```bash
npm run start # start dynamodb, api and app
```

- View database collection(s)

```bash
docker compose up --build dynamodb_admin
```

Then go to [Dynamodb admin](http://localhost:8001/tables/Photos);

Create-react-app v5 has [broken hot-reloading in Docker](https://github.com/facebook/create-react-app/issues/11879).

## References

Additional information to setting up this project.

- [Serverless app examples: Enterprise](https://github.com/serverless/examples/blob/master/aws-node-fullstack/README.md)
- [Jest test runner](https://jestjs.io/).
- [React Testing Library](https://testing-library.com/docs/bs-react-testing-library/intro)
