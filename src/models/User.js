const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Users = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  hospital_id: DataTypes.INTEGER,
  user_name: DataTypes.STRING(100),
  password: DataTypes.STRING(250),
  first_name: DataTypes.STRING(50),
  middle_name: DataTypes.STRING(50),
  last_name: DataTypes.STRING(50),
  mobile_number: DataTypes.STRING(50),
  email_id: DataTypes.STRING, // You should specify a length here if necessary
  active: DataTypes.BOOLEAN,
  created_by: DataTypes.STRING,
  created_date: {
    type: DataTypes.DATE,
    allowNull: false, // Make created_date non-null
  },
  updated_by: DataTypes.STRING,
  updated_date: {
    type: DataTypes.DATE,
    allowNull: false, // Make updated_date non-null
  },
}, {
  timestamps: true, // Enable timestamps
  createdAt: 'created_date', // Map the createdAt field to created_date
  updatedAt: 'updated_date', // Map the updatedAt field to updated_date
});

module.exports = Users;
