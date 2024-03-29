const { Sequelize } = require('sequelize');
const { configEnv } = require('./config');

const db = new Sequelize(configEnv.dbName, configEnv.dbUser, configEnv.dbPass, {
  host: configEnv.host,
  dialect: configEnv.dialect,
  logging: false
});

try {
  // db.sync();
  console.info('db connection established');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = db;
