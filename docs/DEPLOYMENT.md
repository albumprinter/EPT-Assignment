# Deployment

The deployment path depends on the Severless framework. Both backend and frontend packages have a script:

```bash
npm run deploy
```

## Requirements

There are configuration steps required:

- [AWS provider credentials](https://www.serverless.com/framework/docs/providers/aws/guide/credentials/).
- DynamoDb provisioned with seed data and access permissions

Due to time constraints, I have not tried to deploy to AWS.
