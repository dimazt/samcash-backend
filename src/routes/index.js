const express = require('express');
const router = express.Router();

const administrator = require('./administrator');
const customers = require('./customers');
const mitra = require('./mitra');
const auth = require('./auth');
const AuthMiddleware = require('../app/middlewares/AuthMiddleware');

router.use('/administrator/',AuthMiddleware.checkToken, administrator)
router.use('/customers/',AuthMiddleware.checkToken, customers)
router.use('/mitra/',AuthMiddleware.checkToken, mitra)
router.use('/auth', auth)

module.exports = router;