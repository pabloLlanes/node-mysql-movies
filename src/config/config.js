require('dotenv').config();

const configEnv = {
  port: process.env.PORT || 4000,

  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DIALECT || 'mysql',

  dbName: process.env.DB_NAME || '',
  dbUser: process.env.DB_USER || '',

  dbPass: process.env.DB_PASSWORD || '',
  dbJwtSecret: process.env.JWT_TOP_SECRET || '',

};

module.exports = { configEnv };
