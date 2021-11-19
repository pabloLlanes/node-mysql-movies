const { createMovie, readMovies } = require('./movies.services');
const { CREATED_DONE, CREATE_FAIL } = require('../../helpers/messages');

const getAllMovies = async (_, res) => {
  const movies = await readMovies();

  res.json(movies);
};

const postMovie = async (req, res) => {
  try {
    const data = req.body;
    const movie = await createMovie(data);

    res.status(201).json({ msg: CREATED_DONE, movie });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: CREATE_FAIL });
  }
};

module.exports = {
  getAllMovies,
  postMovie
};
