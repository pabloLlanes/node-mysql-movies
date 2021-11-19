const { createTvshow, readTvshows } = require('./tvshows.services');

const getAllTvshows = async (_, res) => {
  const tvshows = await readTvshows();

  res.json(tvshows);
};

const postTvshow = async (req, res) => {
  try {
    const data = req.body;
    const tvshow = await createTvshow(data);

    res.status(201).json({ tvshow, msg: 'resource created' });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: 'internal server error: create Tvshow'
    });
  }
};

module.exports = {
  getAllTvshows,
  postTvshow
};
