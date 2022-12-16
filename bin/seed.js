// write seed file here

const { db } = require("../server/db");
const { green, red } = require("chalk");
const { createStudentDataBase, createCampusDataBase } = require("./fakeData");

// require models here

const Student = require("../server/db/models/Student");
const Campus = require("../server/db/models/Campus");


// -------------------------------------------
// --------- SEED ASYNC CALL -----------------
// -------------------------------------------
const seed = async () => {

  const campuses = createCampusDataBase(10)
  const students = createStudentDataBase(20)
  try {
    await db.sync({ force: true });

    await Promise.all(campuses.map(campus=>Campus.create(campus)))
    await Promise.all(students.map(student=>Student.create(student)))


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
