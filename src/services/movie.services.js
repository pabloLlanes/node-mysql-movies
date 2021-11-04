const Movie = require('../api/movies/movie.model');

const createMovie = ({ title, year, rank }) => {
  const newMovie = {
    title,
    year,
    rank
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
  createMovie
};
