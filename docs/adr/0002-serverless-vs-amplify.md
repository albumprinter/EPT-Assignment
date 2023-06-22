# Serverless Framework vs Amplify

- Author: [Peter Banjo](peter.banjo@photobox.com)
- Status: approved

Facing the concern of deploying a frontend and backend application, and provisioning AWS infrastructure, I tried to use [Amplify JavaScript libraries](https://docs.amplify.aws/lib/project-setup/create-application/q/platform/js/) to save time.

## Pros

- Provision AWS infrastructure via command-line
- Ability to run application locally

## Cons

- Maintaining generated code and verbose configuration files
- Difficult to refactor since generator can overwrite changes
- Lack of working examples

## Outcome

I decided to return to Serverless.
