const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { User } = require('../db');
require('dotenv').config();

// START
// local authentication route
router.post(
  '/login',
  passport.authenticate('local', { session: false }),
  (req, res, next) => {
    try {
      const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET);
      res.json({ token });
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  }
);
// JWT authentication route
// router.get(
//   '/me',
//   passport.authenticate('jwt', { session: false }),
//   async (req, res) => {
//     try {
//       res.json(req.user);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }
// );
// END

// router.post('/login', async (req, res, next) => {
//   try {
//     res.send({ token: await User.authenticate(req.body) });
//   } catch (err) {
//     next(err);
//   }
// });

// router.post('/signup', async (req, res, next) => {
//   try {
//     const user = await User.create(req.body);
//     res.send({ token: await user.generateToken() });
//   } catch (err) {
//     if (err.name === 'SequelizeUniqueConstraintError') {
//       res.status(401).send('User already exists');
//     } else {
//       next(err);
//     }
//   }
// });

router.get('/me', async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
