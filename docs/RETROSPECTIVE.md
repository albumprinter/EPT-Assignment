# Retrospective

Reflections on my assignment.

## What went well

- Used Serverless framework to build APIs.
- Used DynamoDb including seeding Database.
- Built a full-stack application in Docker compose.
- Followed Test-Driven principles except when debugging issues.
- Adequate documentation to rebuild or improve from.

## What could be improved

- I spent significant time setting up project. Perhaps I should have spent more time finding a starter project. But those I found didn't always work, especially the Serverless examples.
- The UI is incomplete. The overlay with image effecs is not shown and not all filters, sorts are implemented. Instead, I've applied a rotation effect to all the images shown.
- The deployment story is incomplete. Although I'm running the API with Serverless framework, I doubt `serverless deploy` will work without some interventions. And the UI might require CloudFront, S3 and Route53 configurations.
- I tried using AWS Amplify and AWS CDK. Both were a huge waste of time.
- The scope of the assignment.
