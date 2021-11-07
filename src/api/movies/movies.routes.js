const { Router } = require('express');
const { getAllMovies, postMovie } = require('./movies.controller');
const { isAuthenticated } = require('../../middlewares/isAuthenticated');
const { createModelFilm } = require('../../middlewares/validateInputs');
const router = Router();

router.get('/', getAllMovies);
router.post('/', [isAuthenticated, createModelFilm], postMovie);

module.exports = router;
