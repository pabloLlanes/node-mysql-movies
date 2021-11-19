const { createMovie, readMovies } = require('./movies.services');

const getAllMovies = async (_, res) => {
  const movies = await readMovies();

  res.json(movies);
};

const postMovie = async (req, res) => {
  try {
    const data = req.body;
    const movie = await createMovie(data);

    res.status(201).json({ movie, msg: 'resource created' });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: 'internal server error: create movie'
    });
  }
};

module.exports = {
  getAllMovies,
  postMovie
};
