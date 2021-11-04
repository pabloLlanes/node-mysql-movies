const { Router } = require('express');
const { getAllMovies } = require('./movies.controller');

const router = Router();

router.get('/', getAllMovies);

module.exports = router;
