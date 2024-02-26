// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
  let token = req.header('Authorization');

  // Log the token to the console for debugging
  // console.log('Received Token:', token);

  if(!token){
    return res.status(401).json({ message: 'Authorization denied' });
  }

  // Remove the 'Bearer ' prefix and trim any extra spaces
  token = token.replace('Bearer ', '').trim();

  try{
    const decoded = jwt.verify(token, config.secretKey);
    req.user = decoded.user;
    next();
  }catch(err){
    // console.error('Token Verification Error:', err);
    res.status(401).json({ message: 'Token is not valid' });
  }
};
