# DynamoDb

We create a data layer to manage interactions between our database and API.

It would be ideal to share this logic with the `dynamodb` package but that would involve hosting our packages in a registry to continue to support independent docker images.
