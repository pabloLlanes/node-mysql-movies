const Season = require('./season.model');

const readSeasons = async () => {
  try {
    return await Season.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    });
  } catch (error) {
    throw error;
  }
};

const createSeason = ({ title, description }) => {
  const newSeason = {
    title,
    description
  };
  try {
    const createdSeason = Season.create(newSeason);
    if (!createdSeason) {
      return null;
    }
    return createdSeason;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createSeason,
  readSeasons
};
