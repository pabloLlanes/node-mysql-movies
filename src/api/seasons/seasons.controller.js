const { createSeason, readSeasons } = require('./seasons.services');
const { CREATED_DONE, CREATE_FAIL } = require('../../helpers/messages');

const getAllSeasons = async (_, res) => {
  const seasons = await readSeasons();

  res.json(seasons);
};

const postSeason = async (req, res) => {
  try {
    const data = req.body;
    const season = await createSeason(data);

    res.status(201).json({ msg: CREATED_DONE, season });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: CREATE_FAIL });
  }
};

module.exports = {
  getAllSeasons,
  postSeason
};
