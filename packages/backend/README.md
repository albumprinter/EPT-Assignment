# Serverless REST API with DynamoDB

This package runs a serverless service locally, using the
[serverless-offline](https://github.com/dherault/serverless-offline) plugin. It
provides a REST API to view Photos stored in a DynamoDB, similar to the
[aws-node-rest-api-with-dynamodb](https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb)
example.

## Requirements

- AWS Amazon account

- Serverless CLI installed and logged-in

```bash
serverless login
```

- AWS integration with [Serverless framework](https://www.serverless.com/console/docs/integrations/aws/).

- [DynamoDB package](../dynamodb/README.md) package as a data store.

## Getting started

Test your service locally, without having to deploy it first.

## Setup

```bash
npm install
serverless offline start
```

## Usage

You can list photos with the following commands:

### Create a Todo

```bash
curl -X POST -H "Content-Type:application/json" http://localhost:3000/photos'
```

Example output:
