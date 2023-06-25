const express = require('express');
const AuthController = require('../app/controllers/AuthController');
const AuthMiddleware = require('../app/middlewares/AuthMiddleware');
const router = express.Router();

// Rute: /mitra
router.get('/', (req, res) => {
  res.json({
    name : 'api customers',
    version : '1.0.0',
    author : 'Samdev'
  });
});



module.exports = router;
