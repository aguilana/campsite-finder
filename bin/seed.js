// write seed file here

const { db } = require("../server/db");
const { green, red } = require("chalk");
const { createStudentDataBase, createCampusDataBase } = require("./fakeData");

// require models here

const Student = require("../server/db/models/Student");
const Campus = require("../server/db/models/Campus");


// const loremHipsum = () => hipsum({
//     count: 2,
//     units: 'paragraphs',
//     paragraphLowerBound: 5,
//     paragraphsUpperBound: 15,
//     format: 'plain'
// })

// // sample data
// function createRandomCampus() {
//   return {
//     name: faker.company.name(),
//     imageUrl: faker.image.business(250, 250),
//     address: "123 Main St, Roger NY, 82273",
//     description: loremHipsum(),
//   };
// }

// // create loop and make student list
// function createRandomUser() {
//   return {
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     email: faker.internet.email(),
//     imageUrl: faker.image.people(250, 250, true),
//     gpa: faker.datatype.number({
//       max: 4,
//       min: 0,
//       precision: 0.01,
//     }),
//     campusId: faker.datatype.number({ max: 15, min: 1 }),
//   };
// }


//   //   loop to create array of students
//   const createStudentDataBase = (num) => {
//     const arr = [];
//     for (let i = 0; i < num; i++) {
//       let student = createRandomUser();
//       arr.push(student);
//     }
//     return arr;
//   };

//   const createCampusDataBase = (num) => {
//     const arr = []
//   for (let i=0; i<num; i++) {
//     let campus = createRandomCampus();
//     arr.push(campus)
//   }
//   return arr
// };

// -------------------------------------------
// --------- SEED ASYNC CALL -----------------
// -------------------------------------------
const seed = async () => {

  const campuses = createCampusDataBase(100)
  const students = createStudentDataBase(200)
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
