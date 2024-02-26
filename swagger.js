// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'Authentication API',
      version: '1.0.0',
      description: 'API for user registration, login, and profile access',
    },
  },
  apis: ['./src/controllers/*.js'], // Point to your controllers or routes
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
