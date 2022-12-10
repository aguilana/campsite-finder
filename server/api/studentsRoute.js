const router = require("express").Router();
const { Student, Campus } = require("../db");

// GET /api/students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll({
      attributes: ["id", "firstName", "lastName", "email", "imageUrl", "gpa"],
      include: [{
        model: Campus,
        attributes: ['id', 'name', 'imageUrl', 'address', 'description']
        }],
    });
    res.send(students);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
