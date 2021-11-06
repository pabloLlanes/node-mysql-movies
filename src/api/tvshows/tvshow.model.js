const { Sequelize } = require('sequelize');

const db = require('../../config/db');
const Actor = require('../actors/actor.model');
const Director = require('../directors/director.model');
const Season = require('../seasons/season.model');

const Tvshow = db.define('Tvshow', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: Sequelize.STRING,
  rank: Sequelize.INTEGER,

  channel: Sequelize.STRING
});

Tvshow.belongsToMany(Actor, { through: 'tvshowactors' });
Actor.belongsToMany(Tvshow, { through: 'tvshowactors' });

Director.hasOne(Tvshow, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT'
});
Tvshow.belongsTo(Director);

Tvshow.hasMany(Season, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT'
});
Season.belongsTo(Tvshow);

module.exports = Tvshow;
