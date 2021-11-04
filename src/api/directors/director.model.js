const { Sequelize } = require('sequelize');

const db = require('../../config/db');

const Director = db.define('Director', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  directorYear: Sequelize.INTEGER
});

module.exports = Director;
