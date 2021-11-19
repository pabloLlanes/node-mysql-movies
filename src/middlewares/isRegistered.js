const { validateEmail } = require('../api/users/users.services');
const { EXIST_EMAIL, INVALID_EMAIL } = require('../helpers/messages');

const isRegistered = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await validateEmail(email);
    if (user) {
      return res.status(401).json({ msg: EXIST_EMAIL });
    }
    req.user = user;

    next();
  } catch (e) {
    res.status(401).json({
      msg: INVALID_EMAIL
    });
  }
};

module.exports = { isRegistered };
