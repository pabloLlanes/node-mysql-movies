const Director = require('./director.model');

const readDirectors = async () => {
  try {
    return await Director.findAll();
  } catch (error) {
    throw error;
  }
};

const createDirector = ({ name, age, directorYear }) => {
  const newDirector = {
    name,
    age,
    directorYear
  };
  try {
    const createDirector = Director.create(newDirector);
    if (!createDirector) {
      return null;
    }
    return createDirector;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createDirector,
  readDirectors
};
