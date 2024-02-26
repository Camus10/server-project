// src/app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../swagger'); // Import the Swagger options

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load routes
const authRoutes = require('./routes/authRoutes');
app.use('/auth', authRoutes);

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
