const { faker } = require("@faker-js/faker");
const hipsum = require("lorem-hipsum");
const casual = require("casual");
const { campusArray, studentArray } = require("./imageUrl")



const loremHipsum = () =>
  hipsum({
    count: 2,
    units: "paragraphs",
    paragraphLowerBound: 5,
    paragraphsUpperBound: 15,
    format: "plain",
  });

//  create Student
function createRandomUser() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    imageUrl: studentArray[Math.floor(Math.random()*150)],
    gpa: faker.datatype.number({
      max: 4,
      min: 0,
      precision: 0.01,
    }),
    campusId: faker.datatype.number({ max: 110, min: 1 }),
  };
}

const college = ["University", "College", "State", "Community College"];

//   create Campus
function createRandomCampus() {
  return {
    name: casual.state + " " + college[Math.floor(Math.random() * 4)],
    imageUrl: campusArray[Math.floor(Math.random()*110)],
    address: casual.address,
    description: loremHipsum(),
  };
}

//   loop to create array of students
const createStudentDataBase = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    let user = createRandomUser();
    arr.push(user);
  }
  return arr;
};

// loop to create array of Campuses
const createCampusDataBase = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    let user = createRandomCampus();
    arr.push(user);
  }
  return arr;
};

module.exports = {
  loremHipsum,
  createRandomUser,
  createRandomCampus,
  createStudentDataBase,
  createCampusDataBase,
};
