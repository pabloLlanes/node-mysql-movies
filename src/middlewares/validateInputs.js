const { body, validationResult } = require('express-validator');

const registerValidator = [
  body('email')
    .trim()
    .notEmpty()
    .normalizeEmail()
    .withMessage('INVALID_EMAIL')
    .bail(),
  body('password')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('not empty')
    .bail()
    .isLength({ min: 5, max: 16 })
    .withMessage('password min 6'),
  body('description')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('not empty')
    .bail()
    .isLength({ min: 2 })
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

module.exports = { registerValidator, loginValidator };
