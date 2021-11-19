const jwt = require('jsonwebtoken');
const { configEnv } = require('../../config/config');

const createToken = (data) => {
  const { id, email } = data;

  const payload = {
    id,
    email
  };

  return jwt.sign(payload, configEnv.jwtSecret, {
    expiresIn: configEnv.expiresJwt
  });
};

const decodeToken = (token) => {
  return jwt.verify(token, configEnv.jwtSecret);
};

module.exports = {
  createToken,
  decodeToken
};
