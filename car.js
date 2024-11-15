const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Car = sequelize.define('Car', {
  userId: { type: DataTypes.INTEGER, allowNull: false },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  tags: { type: DataTypes.STRING },
  images: { type: DataTypes.STRING }, // Images saved as comma-separated URLs
});
module.exports = Car;
