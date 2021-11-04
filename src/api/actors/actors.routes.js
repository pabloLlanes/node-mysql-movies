const { Router } = require('express');
const { getAllActors, postActor } = require('./actors.controller');

const router = Router();

router.get('/', getAllActors);
router.post('/', postActor);

module.exports = router;
