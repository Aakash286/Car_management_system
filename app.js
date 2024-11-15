require('dotenv').config();
const express = require('express');
const sequelize = require('./config/config');
const authRoutes = require('./routes/authRoutes.js');
const carRoutes = require('./routes/carRoutes');

const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/car', carRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
});
