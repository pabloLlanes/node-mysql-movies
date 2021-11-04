const Movie = require('./movie.model');
const { createMovie, readMovies } = require('../../services/movies.services');

const getAllMovies = async (_, res) => {
  const movies = await readMovies();

  res.json(movies);
};

const postMovie = async (req, res) => {
  try {
    const data = req.body;
    const movie = await createMovie(data);

    res.status(201).json({ msg: 'resource created' });
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
