const db = require('./database');

// REQUIRE DEFINED MODELS HERE
const Campground = require('./models/campground');
const Review = require('./models/review');
const User = require('./models/user');

// MODEL ASSOCIATIONS
Review.belongsTo(Campground, { onDelete: 'CASCADE' }); // review will have campgroundId
Campground.hasMany(Review, { onDelete: 'CASCADE' }); // campgroundId will be on Review as a FK

// export db and models
module.exports = {
  db,
  Campground,
  Review,
  User,
};
