const Tvshow = require('./tvshow.model');
const Actor = require('../actors/actor.model');
const Season = require('../seasons/season.model');

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
          model: Season,
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

const createTvshow = ({ title, year, rank, description }) => {
  const newTvshow = {
    title,
    year,
    rank,
    description
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
