const { Router } = require('express');
const { getAllTvshows, postTvshow } = require('./tvshows.controller');

const router = Router();

router.get('/', getAllTvshows);
router.post('/', postTvshow);

module.exports = router;
