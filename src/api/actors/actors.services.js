const Actor = require('./actor.model');

const readActors = async () => {
  try {
    return await Actor.findAll();
  } catch (error) {
    throw error;
  }
};

const createActor = ({ name, age, nickname }) => {
  const newActor = {
    name,
    age,
    nickname
  };
  try {
    const createdActor = Actor.create(newActor);
    if (!createdActor) {
      return null;
    }
    return createdActor;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createActor,
  readActors
};
