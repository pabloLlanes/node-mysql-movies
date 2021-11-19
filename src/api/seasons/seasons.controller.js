const { createSeason, readSeasons } = require('./seasons.services');

const getAllSeasons = async (_, res) => {
  const seasons = await readSeasons();

  res.json(seasons);
};

const postSeason = async (req, res) => {
  try {
    const data = req.body;
    const season = await createSeason(data);

    res.status(201).json({ data: season, msg: 'resource created' });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: 'internal server error: create season'
    });
  }
};

module.exports = {
  getAllSeasons,
  postSeason
};
