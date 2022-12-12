// write seed file here

const { db } = require("./server/db");
const { green, red } = require("chalk");

// require models here

const Student = require("./server/db/models/Student");
const Campus = require("./server/db/models/Campus");

// sample data

const seed = async () => {
  try {
    await db.sync({ force: true });

    const campus1 = await Campus.create({
      name: "Randomstack Academy",
      imageUrl:
        "https://cdn-0.generatormix.com/images/colleges/whitman-college-washington.jpg",
      address: "102 Cherry Tree Rd, Grindstone, Pennsylvania(PA), 15442",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus at. Sollicitudin ac orci phasellus egestas. Amet nisl suscipit adipiscing bibendum. Arcu dui vivamus arcu felis bibendum. Non quam lacus suspendisse faucibus. Aliquet lectus proin nibh nisl condimentum id venenatis. Elementum facilisis leo vel fringilla est. Proin libero nunc consequat interdum varius sit. Eget duis at tellus at. Et sollicitudin ac orci phasellus egestas tellus rutrum. Tincidunt dui ut ornare lectus sit amet est.",
    });
    const campus2 = await Campus.create({
      name: "Nostack Academy",
      imageUrl:
        "https://cdn-0.generatormix.com/images/colleges/whitman-college-washington.jpg",
      address: "63 Chapeltowne Cir, Nottingham, Maryland(MD), 21236",
      description:
        "Libero volutpat sed cras ornare. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Eget arcu dictum varius duis at consectetur lorem donec. Est pellentesque elit ullamcorper dignissim. Diam sit amet nisl suscipit adipiscing bibendum est. Nibh cras pulvinar mattis nunc sed blandit. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Magna sit amet purus gravida quis blandit turpis. Feugiat vivamus at augue eget arcu dictum varius duis. Bibendum est ultricies integer quis auctor. Aliquam sem fringilla ut morbi tincidunt augue interdum. Ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Erat velit scelerisque in dictum. Consectetur a erat nam at lectus urna duis convallis convallis.",
    });
    const campus3 = await Campus.create({
      name: "Halfstack Academy",
      imageUrl:
        "https://cdn-0.generatormix.com/images/colleges/whitman-college-washington.jpg",
      address: "4245 Mahall Ct NW, Kennesaw, Georgia(GA), 30144",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh cras pulvinar mattis nunc sed. Arcu dui vivamus arcu felis bibendum ut tristique et. In hac habitasse platea dictumst. Lectus sit amet est placerat in egestas erat imperdiet sed.",
    });
    const campus4 = await Campus.create({
      name: "Fullstack Academy",
      imageUrl:
        "https://cdn-0.generatormix.com/images/colleges/whitman-college-washington.jpg",
      address: "77 Main St #APT 1212, Lockport, New York(NY), 14094",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque adipiscing commodo elit at imperdiet dui accumsan. Neque egestas congue quisque egestas diam in arcu cursus. Eu lobortis elementum nibh tellus molestie nunc non blandit. Eget gravida cum sociis natoque penatibus. Vitae auctor eu augue ut. Lectus sit amet est placerat in egestas erat imperdiet sed.",
    });

    await Student.create({
      firstName: "Lenora",
      lastName: "Finley",
      email: "lenora@gmail.com",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
      gpa: 3.33,
      campusId: campus1.id,
    });
    await Student.create({
      firstName: "Elma",
      lastName: "Briggs",
      email: "elma@gmail.com",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
      gpa: 3.67,
      campusId: campus3.id,
    });
    await Student.create({
      firstName: "Tricia",
      lastName: "Santos",
      email: "tricia@gmail.com",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
      gpa: 2.55,
      campusId: campus2.id,
    });
    await Student.create({
      firstName: "Norman",
      lastName: "Reed",
      email: "n.reed@gmail.com",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
      gpa: 3.01,
      campusId: campus4.id,
    });
    await Student.create({
      firstName: "Carmen",
      lastName: "Tanner",
      email: "carmen@gmail.com",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
      gpa: 2.22,
      campusId: campus4.id,
    });
    await Student.create({
      firstName: "Oscar",
      lastName: "Fowler",
      email: "a.fowler@aol.com",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
      gpa: 3.97,
      campusId: campus4.id,
    });
    await Student.create({
      firstName: "Adam",
      lastName: "Wells",
      email: "a.higgens@randata.com",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
      gpa: 1.99,
      campusId: campus2.id,
    });
    await Student.create({
      firstName: "Lily",
      lastName: "Chapman",
      email: "l.chapman@randata.com",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
      gpa: 3.21,
      campusId: campus1.id,
    });
    await Student.create({
      firstName: "Camila",
      lastName: "Hamilton",
      email: "c.hamilton@randata.com",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
      gpa: 3.66,
      campusId: campus2.id,
    });

    await Student.create({
      firstName: "Samantha",
      lastName: "Grant",
      email: "s.grant@randata.com",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F81-813810_transparent-group-of-students-png-college-student-cartoon.png&f=1&nofb=1&ipt=bf172ecef81476de06e3b8ea71d1d8633b7e543297f975e401e3c48351d40398&ipo=images",
      gpa: 2.84,
      campusId: campus3.id,
    });

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
