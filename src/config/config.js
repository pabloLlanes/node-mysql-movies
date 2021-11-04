require('dotenv').config();

const configEnv = {
  port: process.env.PORT || 4000,

  host: process.env.HOST || 'localhost',
  dialect: process.env.DIALECT || 'mysql',

  dbName: process.env.DBNAME || '',
  dbUser: process.env.DBUSER || '',

  dbPass: process.env.DBPASSWORD || '',
  dbJwtSecret: process.env.JWT_TOP_SECRET || '',

  emailUser: process.env.EMAIL_USER || '',
  emailPass: process.env.EMAIL_PASS || ''
};

module.exports = { configEnv };
