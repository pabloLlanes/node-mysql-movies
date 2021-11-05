const { createActor, readActors } = require('./actors.services');

const getAllActors = async (_, res) => {
  const actors = await readActors();

  res.json(actors);
};

const postActor = async (req, res) => {
  try {
    const data = req.body;
    const actor = await createActor(data);

    res.status(201).json({ msg: 'resource created' });
  } catch (e) {
    console.error(e);
    res.status(500).json({
      msg: 'internal server error: create Actorcter'
    });
  }
};

module.exports = {
  getAllActors,
  postActor
};
