// models/product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const imprest = sequelize.define('imprest', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      skuid: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      barcode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
      },
      minstock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxstock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      availablestock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
});

module.exports = imprest;
