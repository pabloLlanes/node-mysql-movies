const { Router } = require('express');
const { getAllMovies, postMovie } = require('./movies.controller');

const router = Router();

router.get('/', getAllMovies);
router.post('/', postMovie);

module.exports = router;
