const studentsRouter = require("express").Router();
const { Student, Campus } = require("../db");

// GET /api/students
studentsRouter.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      attributes: ["id", "firstName", "lastName", "email", "imageUrl", "gpa"],
      include: [
        {
          model: Campus,
          attributes: ["id", "name", "imageUrl", "address", "description"],
        },
      ],
    });
    res.send(students);
  } catch (err) {
    next(err);
  }
});

// GET /api/students/:id
studentsRouter.get("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id, {
      attributes: ["id", "firstName", "lastName", "email", "imageUrl", "gpa"],
      include: [
        {
          model: Campus,
          attributes: ["id", "name", "imageUrl", "address", "description"],
        },
      ],
    });
    res.send(student);
  } catch (err) {
    next(err);
  }
});

// POST /api/students
studentsRouter.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Student.create(req.body))
  }
  catch(err){
    next(err)
  }
})

module.exports = studentsRouter;
