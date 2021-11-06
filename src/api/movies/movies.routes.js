const { Router } = require('express');
const { getAllMovies, postMovie } = require('./movies.controller');
const { isAuthenticated } = require('../../middlewares/isAuthenticated');

const router = Router();

router.get('/', getAllMovies);
router.post('/', [isAuthenticated], postMovie);

module.exports = router;
