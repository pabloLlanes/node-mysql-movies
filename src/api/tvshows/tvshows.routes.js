const { Router } = require('express');
const { getAllTvshows, postTvshow } = require('./tvshows.controller');
const { isAuthenticated } = require('../../middlewares/isAuthenticated');
const { createModelFilm } = require('../../middlewares/validateInputs');
const router = Router();

router.get('/', getAllTvshows);
router.post('/', [isAuthenticated, createModelFilm], postTvshow);

module.exports = router;
