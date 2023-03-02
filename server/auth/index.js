const router = require('express').Router();

router.use('/facebook', require('./facebook'));
router.use('/google', require('./google'));
router.use('/local', require('./local'));

module.exports = router;
