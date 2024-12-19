import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';

// Swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Inventory Management API',
      version: '1.0.0',
      description: 'API documentation for managing products and user authentication',
      contact: {
        name: 'Your Name',
        email: 'youremail@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api', // Match the port from server.ts
      },
    ],
  },
  apis: ['./src/routes/*.ts'], // Path to the API routes (controllers)
};

// Initialize Swagger documentation
const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app: Application) => {
  // Serve Swagger docs
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
