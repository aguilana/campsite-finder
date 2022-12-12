const campusRouter = require("express").Router();
const { Campus } = require("../db");

// GET /api/campuses
campusRouter.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      attributes: ["id", "name", "imageUrl", "address", "description"],
    });
    res.send(campuses);
  } catch (error) {
    next(err);
  }
});

// GET /api/campuses/:id
campusRouter.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id, {
      attributes: ["id", "name", "imageUrl", "address", "description"],
    });
    res.send(campus);
  } catch (err) {
    next(err)
  }
});

module.exports = campusRouter;
