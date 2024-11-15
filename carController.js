const Car = require('../models/car'); // Correct path to your car model

// Create a new car
exports.createCar = async (req, res) => {
  try {
    const { userId, title, description, tags, images } = req.body;

    // Create the car in the database
    const newCar = await Car.create({ userId, title, description, tags, images });

    res.status(201).json({ car: newCar });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create car' });
  }
};

// List all cars for the authenticated user
exports.listCars = async (req, res) => {
  try {
    const cars = await Car.findAll({ where: { userId: req.user.id } });
    res.status(200).json({ cars });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve cars' });
  }
};

// Get a specific car by ID
exports.getCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }
    res.status(200).json({ car });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve car' });
  }
};

// Update a car
exports.updateCar = async (req, res) => {
  try {
    const { title, description, tags, images } = req.body;
    const car = await Car.findByPk(req.params.id);

    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }

    // Update car properties
    car.title = title || car.title;
    car.description = description || car.description;
    car.tags = tags || car.tags;
    car.images = images || car.images;

    await car.save();

    res.status(200).json({ car });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update car' });
  }
};

// Delete a car
exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);

    if (!car) {
      return res.status(404).json({ error: 'Car not found' });
    }

    await car.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete car' });
  }
};
