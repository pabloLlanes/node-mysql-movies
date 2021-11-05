const { Sequelize } = require('sequelize');

const db = require('../../config/db');

const User = db.define('User', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  description: Sequelize.STRING
});

module.exports = User;
