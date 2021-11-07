const { Sequelize } = require('sequelize');

const db = require('../../config/db');
const Actor = require('../actors/actor.model');
const Season = require('../seasons/season.model');

const Tvshow = db.define('Tvshow', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: Sequelize.STRING,
  rank: Sequelize.INTEGER,
  description: Sequelize.STRING
});

Tvshow.belongsToMany(Actor, { through: 'tvshowactors' });
Actor.belongsToMany(Tvshow, { through: 'tvshowactors' });

Tvshow.hasMany(Season, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Season.belongsTo(Tvshow);

module.exports = Tvshow;
