const { Router } = require('express');
const { getAllDirectors, postDirector } = require('./Directors.controller');

const router = Router();

router.get('/', getAllDirectors);
router.post('/', postDirector);

module.exports = router;
