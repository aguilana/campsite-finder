// write seed file here

const { db } = require("../server/db");
const { green, red } = require("chalk");


// require models here


// -------------------------------------------
// --------- SEED ASYNC CALL -----------------
// -------------------------------------------
const seed = async () => {

  try {
    await db.sync({ force: true });



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
