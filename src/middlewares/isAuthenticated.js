const dayjs = require('dayjs');

const User = require('../api/users/user.model');
const { decodeToken } = require('../helpers/jwt.services');
const { validate } = require('../api/users/users.services');

const isAuthenticated = async (req, res, next) => {
  const token = req.header('x-access-token');

  try {
    if (!token) {
      return res.status(401).json({ msg: 'unauthorize, token is required' });
    }
    const userData = decodeToken(token);

    if (userData.exp <= dayjs().unix()) {
      return res.status(401).json({ msg: 'token expired!' });
    }
    if (!userData.id) {
      return res.status(401).json({ msg: 'unauthorize, invalid token!' });
    }
    console.log(userData);
    const user = await validate(userData.id, userData.email);
    if (!user) {
      return res.status(401).json({ msg: 'user not encountered' });
    }

    req.user = user;

    next();
  } catch (e) {
    res.status(401).json({
      msg: 'error: token invalid or expired'
    });
  }
};

module.exports = { isAuthenticated };
