const Director = require('./director.model');
const {
  createDirector,
  readDirectors
} = require('../../services/directors.services');

const getAllDirectors = async (_, res) => {
  const directors = await readDirectors();

  res.json(directors);
};

const postDirector = async (req, res) => {
  try {
    const data = req.body;
    const director = await createDirector(data);

    res.status(201).json({ msg: 'resource created' });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: 'internal server error: create Directorcter'
    });
  }
};

module.exports = {
  getAllDirectors,
  postDirector
};
