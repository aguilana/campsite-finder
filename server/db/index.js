const db = require('./database')

// REQUIRE DEFINED MODELS HERE
    const Campground = require('./models/campground')
    const Review = require('./models/review')
// MODEL ASSOCIATIONS

Review.belongsTo(Campground)
Campground.hasMany(Review)

// export db and models
module.exports = {
    db,
    Campground,
    Review
}