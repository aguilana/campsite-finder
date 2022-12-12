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
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.TEpmjBc7iWoJ6j2GLaS-4AHaE8%26pid%3DApi&f=1&ipt=8356bce8c4add0d1fe2aa3121a00754b8c8b14c2020a2b156ac7fed5b50ab971&ipo=images",
      gpa: 3.33,
      campusId: campus1.id,
    });
    await Student.create({
      firstName: "Elma",
      lastName: "Briggs",
      email: "elma@gmail.com",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Apaq898BF-iV1VPzPG73egHaKh%26pid%3DApi&f=1&ipt=4b6bbc385b3b2d5934ac00f3dec1b106ee10297897274938df41e56f600a2457&ipo=images",
      gpa: 3.67,
      campusId: campus3.id,
    });
    await Student.create({
      firstName: "Tricia",
      lastName: "Santos",
      email: "tricia@gmail.com",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FULFS0_Q0zd37UlC4VIYCwHaFW%26pid%3DApi&f=1&ipt=42c570d97fa54fbbb12032827beaa2360d875c8ac08e51834455527e6e3a3f3b&ipo=images",
      gpa: 2.55,
      campusId: campus2.id,
    });
    await Student.create({
      firstName: "Norman",
      lastName: "Reed",
      email: "n.reed@gmail.com",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rcfDm6OymEC4mbGB_05zagHaEK%26pid%3DApi&f=1&ipt=09e4bf5ae60c817301d729bd967fc50dbfa1b8c9250f2585f09670db31ed7cd0&ipo=images",
      gpa: 3.01,
      campusId: campus4.id,
    });
    await Student.create({
      firstName: "Carmen",
      lastName: "Tanner",
      email: "carmen@gmail.com",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.jbb9KQCLOr98CvOyRvW7CgHaEK%26pid%3DApi&f=1&ipt=cd69355551141690a842859111384bb652fd6b9717210a5ac953595c23ef56dc&ipo=images",
      gpa: 2.22,
      campusId: campus4.id,
    });
    await Student.create({
      firstName: "Oscar",
      lastName: "Fowler",
      email: "a.fowler@aol.com",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.D2Gi-rRsYc396t3tpYBbeAHaGS%26pid%3DApi&f=1&ipt=f6e42e663b40cb5f7a5cdb1572d3784743795d8de3f9cb50a993a563a62d00c6&ipo=imagess",
      gpa: 3.97,
      campusId: campus4.id,
    });
    await Student.create({
      firstName: "Adam",
      lastName: "Wells",
      email: "a.higgens@randata.com",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.DJmFkywk0yM_0OBdDpugmQHaE7%26pid%3DApi&f=1&ipt=7179e77384777ac9526d71af2e92cfb87807c5e1c531101c86e36cf6e72eb332&ipo=images",
      gpa: 1.99,
      campusId: campus2.id,
    });
    await Student.create({
      firstName: "Lily",
      lastName: "Chapman",
      email: "l.chapman@randata.com",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Mhb9EO32emmlQVowDZFPDgEsDH%26pid%3DApi&f=1&ipt=1c9e17ec87dcabc61b9b9b3003b2fe66400078aae7013b0fd2a344ef8d4f90fd&ipo=images",
      gpa: 3.21,
      campusId: campus1.id,
    });
    await Student.create({
      firstName: "Camila",
      lastName: "Hamilton",
      email: "c.hamilton@randata.com",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZyEi3J8axC26usiGHRmRlwHaFp%26pid%3DApi&f=1&ipt=e193ae1915512390391ee5b8da3dc2ee07030495374c8567253eebc1186a66b0&ipo=images",
      gpa: 3.66,
      campusId: campus2.id,
    });

    await Student.create({
      firstName: "Samantha",
      lastName: "Grant",
      email: "s.grant@randata.com",
      imageUrl:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.94qmnL0xYCz-FoELHj4jSAHaE7%26pid%3DApi&f=1&ipt=511864baa73fac6f9497c45feb8c2f8782ad5e43df386378165484ef9ae0020e&ipo=images",
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
