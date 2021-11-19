const dayjs = require('dayjs');
const {
  AUTH_TOKEN_EXPIRED,
  AUTH_TOKEN_INVALID,
  INVALID_CREDENTIAL
} = require('../helpers/messages');

const { decodeToken } = require('../api/users/jwt.services');
const { validateId } = require('../api/users/users.services');

const isAuthenticated = async (req, res, next) => {
  const token = req.header('x-access-token');

  try {
    if (!token) {
      return res.status(401).json({ msg: AUTH_TOKEN_INVALID });
    }
    const userData = decodeToken(token);

    if (userData.exp <= dayjs().unix()) {
      return res.status(401).json({ msg: AUTH_TOKEN_EXPIRED });
    }
    if (!userData.id) {
      return res.status(401).json({ msg: AUTH_TOKEN_INVALID });
    }
    const user = await validateId(userData.id);
    if (!user) {
      return res.status(401).json({ msg: INVALID_CREDENTIAL });
    }

    req.user = user;

    next();
  } catch (e) {
    res.status(401).json({
      msg: AUTH_TOKEN_INVALID
    });
  }
};

module.exports = { isAuthenticated };
