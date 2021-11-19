const { register, readAll, login } = require('./users.services');
const { CREATED_DONE, CREATE_FAIL } = require('../../helpers/messages');

const getUsers = async (_, res) => {
  const users = await readAll();

  res.json(users);
};

const createUser = async (req, res) => {
  try {
    const data = req.body;
    const user = await register(data);

    res.status(201).json({ msg: CREATED_DONE, user });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: CREATE_FAIL });
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
