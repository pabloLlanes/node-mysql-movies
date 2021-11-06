const { createTvshow, readTvshows } = require('./tvshows.services');

const getAllTvshows = async (_, res) => {
  const tvshows = await readTvshows();

  res.json(tvshows);
};

const postTvshow = async (req, res) => {
  try {
    const data = req.body;
    const tvshow = await createTvshow(data);

    res.status(201).json({ data: tvshow, msg: 'resource created' });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: 'internal server error: create character'
    });
  }
};

module.exports = {
  getAllTvshows,
  postTvshow
};