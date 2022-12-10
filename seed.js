// write seed file here

const { db } = require("./server/db");
const { green, red } = require("chalk");

// require models here

    const Student = require('./server/db/models/Student');
    const Campus = require('./server/db/models/Campus');

// sample data

const students = [
  {
    firstName: "Lenora",
    lastName: "Finley",
    email: "lenora@gmail.com",
    image: "http://www.clipartbest.com/cliparts/dir/7L7/dir7L7ki9.png",
    address: "123 Main St",
    gpa: Math.random() * 4,
  },
  {
    firstName: "Elma",
    lastName: "Briggs",
    email: "elma@gmail.com",
    image: "http://www.clipartbest.com/cliparts/dir/7L7/dir7L7ki9.png",
    address: "456 Boulevard",
    gpa: Math.random() * 4,
  },
  {
    firstName: "Tricia",
    lastName: "Santos",
    email: "tricia@gmail.com",
    image: "http://www.clipartbest.com/cliparts/dir/7L7/dir7L7ki9.png",
    address: "789 Ct",
    gpa: Math.random() * 4,
  },
  {
    firstName: "Carmen",
    lastName: "Tanner",
    email: "carmen@gmail.com",
    image: "http://www.clipartbest.com/cliparts/dir/7L7/dir7L7ki9.png",
    address: "1000 State St",
    gpa: Math.random() * 4,
  },
];

const campuses = [
  {
    name: "Randomstack Academy",
    imageUrl:
      "https://cdn-0.generatormix.com/images/colleges/whitman-college-washington.jpg",
    address: "102 Cherry Tree Rd, Grindstone, Pennsylvania(PA), 15442",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus at. Sollicitudin ac orci phasellus egestas. Amet nisl suscipit adipiscing bibendum. Arcu dui vivamus arcu felis bibendum. Non quam lacus suspendisse faucibus. Aliquet lectus proin nibh nisl condimentum id venenatis. Elementum facilisis leo vel fringilla est. Proin libero nunc consequat interdum varius sit. Eget duis at tellus at. Et sollicitudin ac orci phasellus egestas tellus rutrum. Tincidunt dui ut ornare lectus sit amet est.",
  },
  {
    name: "Nostack Academy",
    imageUrl:
      "https://cdn-0.generatormix.com/images/colleges/whitman-college-washington.jpg",
    address: "63 Chapeltowne Cir, Nottingham, Maryland(MD), 21236",
    description:
      "Libero volutpat sed cras ornare. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Eget arcu dictum varius duis at consectetur lorem donec. Est pellentesque elit ullamcorper dignissim. Diam sit amet nisl suscipit adipiscing bibendum est. Nibh cras pulvinar mattis nunc sed blandit. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Magna sit amet purus gravida quis blandit turpis. Feugiat vivamus at augue eget arcu dictum varius duis. Bibendum est ultricies integer quis auctor. Aliquam sem fringilla ut morbi tincidunt augue interdum. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Erat velit scelerisque in dictum. Consectetur a erat nam at lectus urna duis convallis convallis.",
  },
  {
    name: "Halfstack Academy",
    imageUrl:
      "https://cdn-0.generatormix.com/images/colleges/whitman-college-washington.jpg",
    address: "4245 Mahall Ct NW, Kennesaw, Georgia(GA), 30144",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed. Arcu dui vivamus arcu felis bibendum ut tristique et. In hac habitasse platea dictumst. Lectus sit amet est placerat in egestas erat imperdiet sed.",
  },
  {
    name: "Fullstack Academy",
    imageUrl:
      "https://cdn-0.generatormix.com/images/colleges/whitman-college-washington.jpg",
    address: "77 Main St #APT 1212, Lockport, New York(NY), 14094",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Neque egestas congue quisque egestas diam in arcu cursus. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget gravida cum sociis natoque penatibus. Vitae auctor eu augue ut. Lectus sit amet est placerat in egestas erat imperdiet sed.",
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all(students.map(student => {
        return Student.create(student)
    }));

    await Promise.all(campuses.map(campus => {
        return Campus.create(campus)
    }));

    console.log(green("Seeding success!!"));
    db.close();
  } catch (err) {
    console.error(red("Oh damn! Something went wrong"));
    console.error(err);
    db.close();
  }
};

seed();
