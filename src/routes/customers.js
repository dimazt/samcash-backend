const express = require('express');
const AuthController = require('../app/controllers/AuthController');
const AuthMiddleware = require('../app/middlewares/AuthMiddleware');
const router = express.Router();

// Rute: /mitra
router.get('/', (req, res) => {
  res.send('Customers Route');
});



module.exports = router;
