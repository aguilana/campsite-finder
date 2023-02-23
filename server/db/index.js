const db = require('./database');

// REQUIRE DEFINED MODELS HERE
const Campground = require('./models/campground');
const Review = require('./models/review');
// MODEL ASSOCIATIONS

Review.belongsTo(Campground); // review will have campgroundId
Campground.hasMany(Review); // campgroundId will be on Review as a FK

// export db and models
module.exports = {
  db,
  Campground,
  Review,
};
