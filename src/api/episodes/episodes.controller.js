const { createEpisode, readEpisodes } = require('./episodes.services');

const getAllEpisodes = async (_, res) => {
  const episodes = await readEpisodes();

  res.json(episodes);
};

const postEpisode = async (req, res) => {
  try {
    const data = req.body;
    const episode = await createEpisode(data);

    res.status(201).json({ data: episode, msg: 'resource created' });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: 'internal server error: create character'
    });
  }
};

module.exports = {
  getAllEpisodes,
  postEpisode
};
