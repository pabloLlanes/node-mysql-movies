const { Router } = require('express');
const { getAllEpisodes, postEpisode } = require('./episodes.controller');

const router = Router();

router.get('/', getAllEpisodes);
router.post('/', postEpisode);

module.exports = router;
