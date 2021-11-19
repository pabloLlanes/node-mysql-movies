const { body, validationResult } = require('express-validator');
const { INVALID_EMAIL } = require('../helpers/messages');

const registerValidator = [
  body('email')
    .trim()
    .notEmpty()
    .normalizeEmail()
    .isEmail()
    .withMessage(INVALID_EMAIL)
    .bail(),
  body('password')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('not empty')
    .bail()
    .isLength({ min: 6, max: 16 })
    .withMessage('password min 6'),
  body('description')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('not empty')
    .bail()
    .isLength({ min: 2, max: 150 })
    .withMessage('min 3'),

  async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  }
];

const loginValidator = [
  body('email')
    .trim()
    .notEmpty()
    .normalizeEmail()
    .isEmail()
    .withMessage('INVALID_EMAIL')
    .bail(),
  body('password')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('not empty')
    .bail()
    .isLength({ min: 6, max: 16 })
    .withMessage('password min 6'),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
    }

    next();
  }
];

const createModelFilm = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('not empty')
    .toLowerCase()
    .isLength({ min: 3, max: 32 })
    .withMessage('model min 6'),

  body('description')
    .trim()
    .notEmpty()
    .withMessage('not empty')
    .toLowerCase()
    .isLength({ min: 3, max: 32 })
    .withMessage('description min 6'),

  body('year').trim().notEmpty().withMessage('not empty').toInt(),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
    }

    next();
  }
];

module.exports = { registerValidator, loginValidator, createModelFilm };
