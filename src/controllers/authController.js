// src/controllers/authController.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// Mock user data (replace with a database)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

const register = (req, res) => {
  // Implement user registration logic
};

const login = (req, res) => {
    const { username, password } = req.body;

    // Find user by username
    const user = users.find((u) => u.username === username);
  
    // Check if user exists and password is correct
    if(!user || user.password !== password){
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    // Generate JWT token
    const token = jwt.sign({ user: { id: user.id, username: user.username } }, config.secretKey, {
      expiresIn: config.expiresIn,
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
