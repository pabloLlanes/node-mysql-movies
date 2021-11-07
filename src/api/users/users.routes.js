const { Router } = require('express');
const { getUsers, createUser, loginUser } = require('./users.controller');
const { isAuthenticated } = require('../../middlewares/isAuthenticated');
const { isRegistered } = require('../../middlewares/isRegistered');
const {
  registerValidator,
  loginValidator
} = require('../../middlewares/validateInputs');
const router = Router();

router.post('/auth/register', [registerValidator, isRegistered], createUser);
router.post('/auth/login', [loginValidator], loginUser);

router.get('/', [isAuthenticated], getUsers);
router.post('/', [isRegistered], createUser);

module.exports = router;
getUsers, createUser, loginUser;
