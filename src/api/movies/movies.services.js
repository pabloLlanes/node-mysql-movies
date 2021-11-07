const Movie = require('./movie.model');
const Actor = require('../actors/actor.model');
const Director = require('../directors/director.model');

const readMovies = async () => {
  try {
    return await Movie.findAll({
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

const createMovie = ({ title, description, year, rank }) => {
  const newMovie = {
    title,
    year,
    rank,
    description
  };
  try {
    const createdMovie = Movie.create(newMovie);
    if (!createdMovie) {
      return null;
    }
    return createdMovie;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  createMovie,
  readMovies
};
