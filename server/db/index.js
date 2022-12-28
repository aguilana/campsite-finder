const db = require('./database')

// REQUIRE DEFINED MODELS HERE
    const Campground = require('./models/campground')
// MODEL ASSOCIATIONS


// export db and models
module.exports = {
    db,
    Campground
}