# Serverless REST API with DynamoDB

This package runs a serverless service locally, using the
[serverless-offline](https://github.com/dherault/serverless-offline) plugin. It
provides a [Fastify](https://fastify.dev/) REST API to view Photos stored in a DynamoDB.

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

### Get all photos

```bash
curl -X GET -H "Content-Type:application/json" http://localhost:9000/photos'
```

Example output:

```JSON
[{"id":"image_10","category":"poster","orderCount":350,"extra":{"texture":"canvas"}},{"id":"image_13","category":"card","orderCount":3000,"extra":{"border":5}},{"id":"image_5","category":"poster","orderCount":112800,"extra":{"texture":"glossy"}},{"id":"image_14","category":"card","orderCount":49700,"extra":{"rotate":270}},{"id":"image_12","category":"walldecor","orderCount":100000,"extra":{"border":5}},{"id":"image_8","category":"card","orderCount":78400,"extra":{"border":3}},{"id":"image_4","category":"walldecor","orderCount":7411,"extra":{"texture":"glossy","border":5,"rotate":90}},{"id":"image_7","category":"walldecor","orderCount":1000},{"id":"image_6","category":"walldecor","orderCount":12500,"extra":{"border":3,"rotate":180}},{"id":"image_3","category":"poster","orderCount":8500},{"id":"image_15","category":"card","orderCount":8500,"extra":{"rotate":180}},{"id":"image_1","category":"poster","orderCount":500},{"id":"image_9","category":"card","orderCount":97100,"extra":{"rotate":90}},{"id":"image_11","category":"walldecor","orderCount":77980,"extra":{"texture":"canvas","border":3,"rotate":90}},{"id":"image_2","category":"poster","orderCount":95700,"extra":{"texture":"glossy"}}]
```

## References

- [aws-node-rest-api-with-dynamodb](https://github.com/serverless/examples/tree/master/aws-node-rest-api-with-dynamodb).
- [react-blog-with-nextjs-dynamodb](https://github.com/mjyocca/react-blog-with-nextjs-dynamodb)
