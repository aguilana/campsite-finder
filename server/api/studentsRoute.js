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
    res.status(200).send(students);
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
    if (!student) {
      let err = new Error("No student found with that ID");
      err.status = 404;
      next(err);
    } else {
      res.status(200).send(student);
    }
  } catch (err) {
    next(err);
  }
});

// POST /api/students
studentsRouter.post("/", async (req, res, next) => {
  console.log("SERVER SIDE: ", req.body)
  try {
    res.status(201).send(await Student.create(req.body));
  } catch (err) {
    next(err);
  }
});

// DELETE /api/students/:id
studentsRouter.delete("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    if (!student) {
      let err = new Error(
        "Cannot remove student - no student found with that id"
      );
      next(err);
    } else {
      await student.destroy();
      res.status(200).send(student);
    }
  } catch (err) {
    next(err);
  }
});

// PUT /api/students/:id/
studentsRouter.put("/:id", async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id);
    res.status(200).send(await student.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = studentsRouter;
