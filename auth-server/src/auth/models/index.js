'use strict';

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:authmemory';

const sequelize = new Sequelize(DATABASE_URL);

module.exports = {
  dbAuth: sequelize,
  users: userModel(sequelize, DataTypes),
};
