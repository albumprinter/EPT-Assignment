## **Assignment: Photo Products Representation**

We expect the candidate to show us their skills in building testable and maintainable software with design and architecture in mind using industry best practices.
We value __simple__ more highly than __complex__, __working__ is better than __nice__. Readability matters.

### **Frontend Component**

Create a web application that allows users to browse and view physical representations of photo products. The application should have the following features:

1. The frontend application should be built using any framework of the candidate's choice (e.g., React, Angular, Vue.js) and should have an intuitive user interface design.
2. The application should make an HTTP request to the backend API to fetch a JSON object containing images and their physical properties.
3. The application should support filtering and sorting of the images through the API based on the following criteria:
   - Filters:
     - Passe-partout (true/false)
     - Texture (e.g., canvas, glossy, not-applied)
   - Sorting:
     - Category (ascending/descending)
     - Order count (ascending/descending)
4. The JSON object should include the following information for each image:
   - Image URL
   - Passe-partout (number)
   - Texture (string)
   - Category (string)
   - Order count (integer)
   - Scale (float)
   - Rotation (integer, degree)
5. The frontend application should display a gallery of images without rendering their properties initially. Each image should be represented by a thumbnail.
6. Upon a user click on an image, the application should use the image properties (passe-partout, texture, scale, rotation) to render the physical representation of the image as described in the JSON file. The rendered representation could be an overlay on top of the thumbnail or a separate expanded view of the image.

### **Backend Component**

Design and implement a serverless backend API using AWS technologies and NodeJS. Product extras are served from the following URL(https://k06fotu2c3.execute-api.eu-west-1.amazonaws.com/). The backend should have the following features:

1. Design an architecture diagram of the API, showing the components involved (e.g., API Gateway, Lambda functions, data store) and how they interact with each other. Use any standard diagramming tool or framework of your choice.
2. Implement a GET endpoint in the backend API that accepts filter and sort arguments as query parameters.
3. The endpoint should retrieve data from a chosen data store (e.g., DynamoDB, S3) based on the filter and sort criteria provided in the request.
4. The backend should filter and sort the retrieved data according to the provided parameters.
5. Return the filtered and sorted data as a JSON response to the frontend application.
6. Leverage AWS serverless technologies such as AWS Lambda and API Gateway for the implementation.

### **Extra Information**

 * **Passe-partout**: Passe-partout is the white border between the frame and image itself. For the simplicity, we've excluded frames and shadows on passe-partout.

![image_frame_passepartout](image_frame_passepartout.png)

 * **Texture**: Represents product material. Example implementation;
  
  ```
    const context = canvas.getContext("2d");
    context.globalCompositeOperation = "multiply";
    context.globalAlpha = 0.5;
    if (texture.repetition === "no-repeat") {
        const { naturalWidth, naturalHeight } = textureImage;
        context.drawImage(textureImage, 0, 0, naturalWidth, naturalHeight, 0, 0, width, height);
    } else {
        const pattern = context.createPattern(textureImage, repetitionType);
        context.fillStyle = pattern;
        context.fillRect(0, 0, width, height);
    }
  ```

  You can also check out these documentations;
  - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
  - https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern

  It should look something like this;

  | Original image | Texture | Image after Texture
  |----------------|---------|--------------------
  ![](image_without_texture.png)|![](texture.png)|![](image_with_texture.png)

### **Instructions**

1. Implement the frontend and backend components of the assignment.
2. Provide documentation (either in the repository or as a separate document) with instructions on how to run and test the application.
3. Share your repository URL or the zipped artifacts with us when you are done.

### **Evaluation Criteria**

Your assignment will be evaluated based on the following criteria:
- **Functionality**: Does the application meet the requirements outlined above? Does the frontend display images and their properties correctly? Does the backend provide the expected filtering and sorting capabilities?
- **Code Quality**: Is the code well-structured, maintainable, and adheres to best practices? Are appropriate frameworks and libraries utilized effectively?
- **UI/UX Design**: Is the user interface intuitive and responsive? Does it provide a good user experience when browsing and viewing the images?
- **Backend Architecture**: Is the architecture diagram clear and well-designed? Does it demonstrate an understanding of serverless technologies and AWS services?
- **Documentation**: Are clear instructions provided for running and testing the application? Is there any relevant information about the design choices made or challenges faced during the implementation?