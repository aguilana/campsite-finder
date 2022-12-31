// write seed file here

const { db } = require("../server/db");
const { green, red } = require("chalk");
const { descriptors, places } = require("./seedHelpers");
const cities = require("./cities");
const hipsum = require("lorem-hipsum");

// require models here
const Campground = require("../server/db/models/campground");
const Review = require('../server/db/models/review')

// -------------------------------------------
// --------- SEED ASYNC CALL -----------------
// -------------------------------------------
const seed = async () => {
  try {
    await db.sync({ force: true });
    const loremHipsum = () => {
      hipsum({
        count: 2,
        units: "paragraphs",
        paragraphLowerBound: 3,
        paragraphsUpperBound: 5,
        format: "plain",
      });
    };

    for (let i = 0; i < 50; i++) {
      const random1000 = Math.floor(Math.random() * 1000);
      const rand17 = Math.floor(Math.random() * 17);
      const rand20 = Math.floor(Math.random() * 20);
      const camp = Campground.create({
        name: `${descriptors[rand17]} ${places[rand20]}`,
        price: `${Math.floor(Math.random() * 25 + 10)}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus pretium quam vulputate dignissim. Commodo ullamcorper a lacus vestibulum sed arcu non odio. Gravida cum sociis natoque penatibus et magnis dis parturient montes. Tellus molestie nunc non blandit massa enim nec dui.',
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
        imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
      });
      await camp;
    }
    const review = Review.create({
      body: "This was a great campsite",
      rating: 3,
      campgroundId: 2
    })
    await review


    console.log(green(" 🌱🌱🌱 ---- Seeding success!! ---- 🌱🌱🌱"));
    db.close();
  } catch (err) {
    console.error(
      red(" ☣ ☣ ☣  ---- Oh damn! Something went wrong ---- ☣ ☣ ☣ ")
    );
    console.error(err);
    db.close();
  }
};

seed().catch((err) => {
  db.close();
  console.log(`

    Error seeding:
    ${err.message}
    ${err.stack}
  `);
});
