const { Sequelize } = require('sequelize');

const db = require('../../config/db');
const Actor = require('../actors/actor.model');
const Director = require('../directors/director.model');

const Movie = db.define('Movie', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: Sequelize.STRING,
  year: Sequelize.INTEGER,
  rank: Sequelize.INTEGER
});

Movie.belongsToMany(Actor, { through: 'movieactors' });
Actor.belongsToMany(Movie, { through: 'movieactors' });

Director.hasOne(Movie, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT'
});
Movie.belongsTo(Director);

module.exports = Movie;
