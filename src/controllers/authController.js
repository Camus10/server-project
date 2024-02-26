// src/controllers/authController.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Mock user data (replace with a database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Endpoint to register a new user
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: User object
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *               example: user1
 *             password:
 *               type: string
 *               example: password1
 *     responses:
 *       '200':
 *         description: Successful registration
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: User registered successfully
 */
const register = (req, res) => {
  // Implement user registration logic
};

/**
 * @swagger
 * /auth/Login:
 *   post:
 *     summary: Login a user
 *     description: Endpoint to Login a user
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: User object
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *               example: user1
 *             password:
 *               type: string
 *               example: password1
 *     responses:
 *       '200':
 *         description: Successful login
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               example: User login successfully
 */
const login = (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find((u) => u.username === username);

  // Check if user exists and password is correct
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a valid JWT token with expiration time set to 1 hour (3600 seconds)
  const token = jwt.sign({ user: { id: user.id, username: user.username } }, config.secretKey, {
    expiresIn: '1h',
    algorithm: 'HS256', // Specify the algorithm
  });

  res.json({ token });
};

const profile = (req, res) => {
  res.json({ user: req.user });
};

module.exports = {
  register,
  login,
  profile,
};
