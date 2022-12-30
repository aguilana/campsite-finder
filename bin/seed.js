// write seed file here

const { db } = require("../server/db");
const { green, red } = require("chalk");
const { descriptors, places } = require("./seedHelpers");
const cities = require("./cities");
const hipsum = require("lorem-hipsum");

// require models here
const Campground = require("../server/db/models/campground");

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
        price: `$${Math.floor(Math.random() * 25 + 10)}`,
        description: 'this is the description',
        location: `${cities[random1000].city}, ${cities[random1000].state}`,
      });
      await camp;
    }


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
