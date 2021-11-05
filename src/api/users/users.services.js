const User = require('./user.model');

const readUsers = async () => {
  try {
    return await User.findAll();
  } catch (error) {
    throw error;
  }
};

const createUser = ({ email, password, description }) => {
  const newUser = {
    email,
    password,
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




module.exports = {
  createUser,
  readUsers
};
