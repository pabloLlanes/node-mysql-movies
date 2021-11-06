const { Sequelize } = require('sequelize');

const db = require('../../config/db');
const Director = require('../directors/director.model');

const Episode = db.define('Episode', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title: Sequelize.STRING,

  description: Sequelize.STRING
});
Director.hasOne(Episode, {
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT'
});
Episode.belongsTo(Director);

module.exports = Episode;
