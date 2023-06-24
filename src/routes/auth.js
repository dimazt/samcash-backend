const express = require('express');
const AuthController = require('../app/controllers/AuthController');
const AuthMiddleware = require('../app/middlewares/AuthMiddleware');
const router = express.Router();


router.post('/register/:type',AuthMiddleware.checkEmailExist, AuthController.register)
router.post('/login',AuthController.login)

module.exports = router;
