const Tvshow = require('./tvshow.model');
const Actor = require('../actors/actor.model');
const Director = require('../directors/director.model');

const readTvshows = async () => {
  try {
    return await Tvshow.findAll({
      attributes: {
        exclude: ['movieactors', 'DirectorId', 'createdAt', 'updatedAt']
      },
      include: [
        {
          model: Actor,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          },
          through: {
            attributes: []
          }
        },
        {
          model: Director,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }
      ]
    });
  } catch (error) {
    throw error;
  }
};

const createTvshow = ({ title, channel, rank }) => {
  const newTvshow = {
    title,
    channel,
    rank
  };
  try {
    const createdTvshow = Tvshow.create(newTvshow);
    if (!createdTvshow) {
      return null;
    }
    return createdTvshow;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createTvshow,
  readTvshows
};
