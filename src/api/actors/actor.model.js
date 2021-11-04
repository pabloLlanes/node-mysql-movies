const { Sequelize } = require('sequelize');

const db = require('../../config/db');

const Actor = db.define('Actor', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  nickname: Sequelize.STRING
});

module.exports = Actor;
