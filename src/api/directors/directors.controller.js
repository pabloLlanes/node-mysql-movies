const Director = require('./director.model');
const { createDirector, readDirectors } = require('./directors.services');
const { CREATED_DONE, CREATE_FAIL } = require('../../helpers/messages');

const getAllDirectors = async (_, res) => {
  const directors = await readDirectors();

  res.json(directors);
};

const postDirector = async (req, res) => {
  try {
    const data = req.body;
    const director = await createDirector(data);

    res.status(201).json({ msg: CREATED_DONE, director });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: CREATE_FAIL });
  }
};

module.exports = {
  getAllDirectors,
  postDirector
};
