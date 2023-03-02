const router = require('express').Router();
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const { User } = require('../db');
// const {
//   googleAuth,
//   googleAuthCallback,
//   facebookAuth,
//   facebookAuthCallback,
// } = require('../middleware/authMiddleware');
// require('dotenv').config();

router.use('/facebook', require('./facebook'));
router.use('/google', require('./google'));
router.use('/local', require('./local'));

// // START
// // local authentication route
// router.post(
//   '/login',
//   passport.authenticate('local', { session: false }),
//   (req, res, next) => {
//     try {
//       const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET);
//       console.log('TOKEN IS: ', token);
//       res.json({ token });
//     } catch (err) {
//       res.status(500).json({ err: err.message });
//     }
//   }
// );

// // JWT authentication route
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
// // END

// // Google authentication route
// // auth/google
// router.get('/google', googleAuth);

// // Facebook authentication route
// // auth/facebook
// router.get('/facebook', facebookAuth);

// // Google authentication callback route
// // auth/google/callback
// router.get('/google/callback', googleAuthCallback, (req, res) => {
//   try {
//     const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET);
//     console.log('TOKEN IS: ', token);
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ err: err.message });
//   }
// });

// // Facebook authentication callback route
// // auth/facebook/callback
// router.get('/facebook/callback', facebookAuthCallback, (req, res) => {
//   try {
//     const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET);
//     console.log('TOKEN IS: ', token);
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ err: err.message });
//   }
// });

// // POST /api/auth/signup

// router.post('/signup', async (req, res, next) => {
//   try {
//     const userExists = await User.findOne({
//       where: { email: req.body.email },
//     });
//     if (userExists) {
//       res.status(401).json('User already exists');
//     }

//     // Create a new user
//     const newUser = await User.create(req.body);
//     const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
//     res.json({ token });
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
