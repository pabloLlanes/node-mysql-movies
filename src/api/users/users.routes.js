const { Router } = require('express');
const { getUsers, createUser, loginUser } = require('./users.controller');
const { isAuthenticated } = require('../../middlewares/isAuthenticated');

const router = Router();

router.post('/auth/register', createUser);
router.post('/auth/login', loginUser);

router.get('/', [isAuthenticated], getUsers);
router.post('/', createUser);

module.exports = router;
getUsers, createUser, loginUser;
