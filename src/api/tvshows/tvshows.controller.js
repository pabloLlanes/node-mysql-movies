const { createTvshow, readTvshows } = require('./tvshows.services');
const { CREATED_DONE, CREATE_FAIL } = require('../../helpers/messages');

const getAllTvshows = async (_, res) => {
  const tvshows = await readTvshows();

  res.json(tvshows);
};

const postTvshow = async (req, res) => {
  try {
    const data = req.body;
    const tvshow = await createTvshow(data);

    res.status(201).json({ msg: CREATED_DONE, tvshow });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: CREATE_FAIL });
  }
};

module.exports = {
  getAllTvshows,
  postTvshow
};
