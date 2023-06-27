# Docker DynamoDB vs serverless-dynamodb-local

- Author: [Peter Banjo](peter.banjo@photobox.com)
- Status: approved
- Date: 2023-06-29

Facing the concern that I could not get the [serverless-dynamodb-local plugin](https://www.serverless.com/plugins/serverless-dynamodb-local) to work because of [issues](https://github.com/99x/serverless-dynamodb-local/issues/294) with the package, then I've setup a Docker version of DynamoDB including seed data.

This has taken a lot of time to work around because

- none working documentation and examples
- debugging DynamoDB errors for creating tables and seeding data
