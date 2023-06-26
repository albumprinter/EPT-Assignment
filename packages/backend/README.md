# Serverless REST API with DynamoDB and offline support

This example demonstrates how to run a service locally, using the
[serverless-offline](https://github.com/dherault/serverless-offline) plugin. It
provides a REST API to manage Todos stored in a DynamoDB, similar to the
[aws-node-rest-api-with-dynamodb](https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb)
example. A local DynamoDB instance is provided by the
[serverless-dynamodb-local](https://github.com/99xt/serverless-dynamodb-local)
plugin.

## Requirements

- AWS Amazon account

- Serverless CLI installed and logged-in

```bash
serverless login
```

- AWS integration with [Serverless framework](https://www.serverless.com/console/docs/integrations/aws/).

## Use-case

Test your service locally, without having to deploy it first.

## Setup

```bash
npm install
cd dynamadb && docker compose up
serverless dynamodb start
serverless offline start
serverless dynamodb migrate
```

## Run service offline

```bash
serverless offline start
```

## Usage

You can list photos with the following commands:

### Create a Todo

```bash
curl -X POST -H "Content-Type:application/json" http://localhost:3000/photos'
```

Example output:

Use Docker compose for Dynamo DB due to an issue with [serverless-dynamodb-local](https://github.com/99x/serverless-dynamodb-local/issues/241)

```bash
docker compose up
docker compose down -v
```
