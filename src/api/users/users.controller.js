const User = require('./user.model');
const { createUser, readUsers } = require('./users.services');

const getAllUsers = async (_, res) => {
  const users = await readUsers();

  res.json(users);
};

const postUser = async (req, res) => {
  try {
    const data = req.body;
    const user = await createUser(data);

    res.status(201).json({ msg: 'resource created', data: user });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: 'internal server error: user'
    });
  }
};

module.exports = {
  getAllUsers,
  postUser
};
