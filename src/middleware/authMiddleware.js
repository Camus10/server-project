// src/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  if(!token){
    return res.status(401).json({ message: 'Authorization denied' });
  }
  
  try{
    const decoded = jwt.verify(token, config.secretKey);
    req.user = decoded.user;
    next();
  }catch(err){
    res.status(401).json({ message: 'Token is not valid' });
  }
};
