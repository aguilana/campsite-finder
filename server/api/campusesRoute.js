const router = require('express').Router();
const { Campus } = require('../db')

// GET /api/campuses
router.get('/', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll()
        res.send(campuses)
    }
    catch(error){
        next(err)
    }
});

module.exports = router