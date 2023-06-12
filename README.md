## **Assignment: Photo Products Representation**

We expect candidates to show us their skills in building robust, testable and maintainable software keeping in mind modern design and architecture principles and industry standard best practices. We value simplicity, readability and pragmatism over unnecessarily performant or complex solutions.

### **Frontend Component**

Create a web application that allows users to browse a range of photo products. The application should have the following features:

1. The frontend application should be built using any framework of the candidate's choice (e.g., React, Angular, Vue.js). You're free to design this application as long as it has an intuitive user interface.
2. The application should make a HTTP request to a backend API to fetch data of photo products.
3. The application should support filtering and sorting of the images through the API based on the following criteria:
   - Filters:
     - White border (true/false)
     - Texture (e.g., canvas, glossy, not-applied)
   - Sorting:
     - Category (ascending/descending alphabetically)
     - Number of orders (ascending/descending)
4. The response object should include the following information for each image:
   - Image URL
   - White border (number)
   - Texture (string)
   - Category (string)
   - Number of orders (integer)
   - Rotation (integer, degree)
5. The frontend application should display a gallery of images without rendering their extra properties initially. Each image should be represented by a thumbnail.
6. Upon a click on an image from the gallery, the application should open an overlay which renders the selected product with all it's properties. This rendering operation should be done on a `HTMLCanvasElement`.

### **Backend Component**

Design and implement a serverless backend API using AWS technologies and NodeJS. Product extras are served from the following URL(https://k06fotu2c3.execute-api.eu-west-1.amazonaws.com/).

The backend should have the following features:

1. Design an architecture diagram of the API, showing the components involved and how they interact with each other. Use any standard diagramming tool or framework of your choice.
2. Implement a GET endpoint in the backend API that accepts filter and sort arguments as query parameters.
3. The endpoint should retrieve data from a chosen data store based on the filter and sort criteria provided in the request.
4. The backend should filter and sort the retrieved data according to the provided parameters.
5. Return the filtered and sorted data as a JSON response to the frontend application.
6. Leverage AWS serverless technologies for the implementation.

### **Extra Information**
  Example response from product extras API
  ```
  [
    ...
    {
      id: "image_4", // Name of the image file
      orderCount: 7411, // Number of orders
      category: "walldecor", // Category
      extra: {
        texture: "glossy", // Textures to be applied. Texture image is in under /images/textures
        whiteBorder: 5, // Size of the white border represented in pixels
        transform: {
          rotate: 10,
        },
      },
    },
    ...
  ]
  ```

 * **White border**: White border around the image. From the endpoint you'll receive the size of this border.

![](image_white_border.jpeg)

 * **Texture**: Represents product material.

  It should look something like this;

  | Original image | Texture | Image after Texture
  |----------------|---------|--------------------
  ![](image_without_texture.png)|![](texture.png)|![](image_with_texture.png)

### **Instructions**

1. Implement the frontend and backend components of the assignment.
2. Provide documentation (either in the repository or as a separate document) with instructions on how to run and test the application.
3. Share your repository URL or the zipped artifacts with us when you are done.

### **What We Value**

Your assignment will be evaluated based on the following values:

- Your backend design and implementation is more valuable to us than the frontend part
- **Functionality**: Does the application meet the requirements outlined above? Does the frontend display images and their properties correctly? Does the backend provide the expected filtering and sorting capabilities?
- **Code Quality**: Is the code well-structured, maintainable, and adheres to best practices? Are appropriate frameworks and libraries utilized effectively?
- **Backend Architecture**: Is the architecture diagram clear and well-designed? Does it demonstrate an understanding of serverless technologies and AWS services?
- **Documentation**: Are clear instructions provided for running and testing the application? Is there any relevant information about the design choices made or challenges faced during the implementation? If you had more time, what would you include or do differently? 