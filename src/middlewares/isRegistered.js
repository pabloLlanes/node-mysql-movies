const { validateEmail } = require('../api/users/users.services');

const isRegistered = async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await validateEmail(email);
    if (user) {
      return res.status(401).json({ msg: 'email has already been registered' });
    }
    req.user = user;

    next();
  } catch (e) {
    res.status(401).json({
      msg: 'email with problems'
    });
  }
};

module.exports = { isRegistered };
