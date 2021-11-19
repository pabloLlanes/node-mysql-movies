const { createEpisode, readEpisodes } = require('./episodes.services');
const { CREATED_DONE, CREATE_FAIL } = require('../../helpers/messages');

const getAllEpisodes = async (_, res) => {
  const episodes = await readEpisodes();

  res.json(episodes);
};

const postEpisode = async (req, res) => {
  try {
    const data = req.body;
    const episode = await createEpisode(data);

    res.status(201).json({ msg: CREATED_DONE, episode });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: CREATE_FAIL });
  }
};

module.exports = {
  getAllEpisodes,
  postEpisode
};
