const Movie = require('./movie.model');
const { createMovie } = require('../../services/movie.services');

const getAllMovies = async (req, res) => {
  const movies = await Movie.findAll();

  res.json(movies);
};

const postMovie = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const movie = await createMovie(data);

    res.json(movie);
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: 'internal server error: create character'
    });
  }
};

module.exports = {
  getAllMovies,
  postMovie
};
