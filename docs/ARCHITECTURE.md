# Architecture

This is a flowchart that shows an overview of the AWS infrastructure that will be deployed:

```mermaid
flowchart LR
    user(((USER)))
    cloudfront[[CloudFront]]
    gateway[[Gateway]]
    s3[\S3/]
    mongo[(Database)]
    lambda[Lambda]

    user -- frontend --> cloudfront
    user -- backend --> gateway
    subgraph AWS
    cloudfront --> s3
    gateway --> lambda
    lambda -->mongo
    end
```

![Flowchart](images/flowchart.png)

This sequence diagram shows the interactions between the UI and API components.

```mermaid
sequenceDiagram
    UI->>+API: GET /
    API-->>-UI: JSON response
    UI-->>UI: Render
    UI->>+API: GET /?border=true&texture=canvas&category=asc&orders=desc
    Note over UI,API: Showing possible query parameters
    API-->>API: Apply filter or sort
    API-->>-UI: JSON response
    UI-->>UI: Render
```

![Scenario diagram](images/scenario-diagram.png)

## Notes

- When the UI renders API responses, the images are stored on the client.
- The API accepts query parameters with default values border (false), texture (none), category (ascending) and orders (ascending).
- I will use a NoSQL document store (Mongo) because it matches the response structure.
