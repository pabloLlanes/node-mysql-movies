const Director = require('../directors/director.model');
const Episode = require('./episode.model');
const Season = require('../seasons/season.model');

const readEpisodes = async () => {
  try {
    return await Episode.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'DirectorId', 'SeasonId']
      },
      include: [
        {
          model: Director,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
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

const createEpisode = ({ title, description }) => {
  const newEpisode = {
    title,
    description
  };
  try {
    const createdEpisode = Episode.create(newEpisode);
    if (!createdEpisode) {
      return null;
    }
    return createdEpisode;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createEpisode,
  readEpisodes
};
