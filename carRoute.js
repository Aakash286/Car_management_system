const express = require('express');
const { authMiddleware } = require('../middleware/authMiddleware');
const { createCar } = require('../controllers/carController');
const router = express.Router();
router.post('/', authMiddleware, createCar);
module.exports = router;
