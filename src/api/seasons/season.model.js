const { Sequelize } = require('sequelize');

const db = require('../../config/db');
const Episode = require('../episodes/episode.model');

const Season = db.define('Season', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: Sequelize.STRING,
  description: Sequelize.STRING
});

Season.hasMany(Episode, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});
Episode.belongsTo(Season);

module.exports = Season;
