const { Router } = require('express');
const { getAllSeasons, postSeason } = require('./seasons.controller');

const router = Router();

router.get('/', getAllSeasons);
router.post('/', postSeason);

module.exports = router;
