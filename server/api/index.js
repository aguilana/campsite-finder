// MAIN HUB OF ROUTES
const router = require('express').Router()

// /api/campgrounds
router.use('/campgrounds', require('./campgroundRoute'))
// /api/campuses
// router.use('/anotherroute', require('./file2'))


// middleware to generate 404 if making request with /api and no routes match proceeding
router.use((req, res, next) => {
    const error = new Error('API route not found');
    error.status = 404;
    next(err)
})

module.exports = router

