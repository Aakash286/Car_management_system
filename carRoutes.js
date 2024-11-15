const express = require('express');
const router = express.Router();
const { createCar, listCars, getCar, updateCar, deleteCar } = require('../controllers/carController'); // Ensure this path is correct
const authenticate = require('../middleware/authenticate'); // Ensure this path is correct

// Create a car
router.post('/cars', authenticate, createCar);

// List all cars of the authenticated user
router.get('/cars', authenticate, listCars);

// Get a specific car by ID
router.get('/cars/:id', authenticate, getCar);

// Update a car
router.put('/cars/:id', authenticate, updateCar);

// Delete a car
router.delete('/cars/:id', authenticate, deleteCar);

module.exports = router;
