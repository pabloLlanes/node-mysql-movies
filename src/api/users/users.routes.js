const { Router } = require('express');
const { getAllUsers, postUser } = require('./users.controller');

const router = Router();

router.post('/auth/register');
router.post('/auth/login');

router.get('/', getAllUsers);
router.post('/', postUser);

module.exports = router;
