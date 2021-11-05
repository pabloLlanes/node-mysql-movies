const User = require('./user.model');
const { register, readAll, login } = require('./users.services');

const getUsers = async (_, res) => {
  const users = await readAll();

  res.json(users);
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const user = await register(data);

    res.status(201).json({ msg: 'resource created', data: user });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: 'internal server error: user'
    });
  }
};
const loginUser = async (req, res) => {
  const data = req.body;

  try {
    const accessToken = await login(data);
    if (accessToken === null) {
      return res.status(401).json({ ok: false, msg: 'unauthorized' });
    }

    return res.status(202).json({ accessToken });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getUsers,
  createUser,
  loginUser
};
