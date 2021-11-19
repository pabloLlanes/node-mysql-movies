const bcrypt = require('bcrypt');

const User = require('./user.model');
const { createToken } = require('./jwt.services');

const readAll = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw error;
  }
};

const validateId = async (id) => {
  try {
    const userId = await User.findOne({ where: id });

    if (!userId) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};
const validateEmail = async (email) => {
  try {
    const userEmail = await User.findOne({ where: { email } });

    if (!userEmail) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};
const register = ({ email, password, description }) => {
  const newUser = {
    email,
    password: bcrypt.hashSync(password, 5),
    description
  };
  try {
    const createdUser = User.create(newUser);
    if (!createdUser) {
      return null;
    }
    return createdUser;
  } catch (error) {
    throw error;
  }
};
const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({
      where: { email }
    });

    if (!user) {
      return null;
    }
    const isCorrect = await bcrypt.compareSync(password, user.password);

    if (!isCorrect) {
      return null;
    }

    return createToken(user);
  } catch (error) {
    throw error;
  }
};
module.exports = {
  register,
  readAll,
  login,
  validateId,
  validateEmail
};
