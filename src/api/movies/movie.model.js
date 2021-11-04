const { Sequelize } = require('sequelize');

const db = require('../../config/db');

const Movie = db.define('Movie', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: Sequelize.STRING,
  year: Sequelize.INTEGER,
  rank: Sequelize.INTEGER
});

module.exports = Movie;
