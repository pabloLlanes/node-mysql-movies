const Movie = require('./movie.model');

const getAllMovies = async (req, res) => {
  const movies = await Movie.findAll();

  res.json(movies);
};
module.exports = {
  getAllMovies
};
