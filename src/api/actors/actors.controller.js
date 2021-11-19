const { createActor, readActors } = require('./actors.services');
const { CREATED_DONE, CREATE_FAIL } = require('../../helpers/messages');

const getAllActors = async (_, res) => {
  try {
    const actors = await readActors();

    res.json(actors);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: CREATE_FAIL });
  }
};

const postActor = async (req, res) => {
  try {
    const data = req.body;
    const actor = await createActor(data);
    res.status(201).json({ msg: CREATED_DONE, actor });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: CREATE_FAIL });
  }
};

module.exports = {
  getAllActors,
  postActor
};
