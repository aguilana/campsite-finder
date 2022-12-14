const campusRouter = require("express").Router();
const { Campus, Student } = require("../db");

// GET /api/campuses
campusRouter.get("/", async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      attributes: ["id", "name", "imageUrl", "address", "description"],
      include: [
        {
          model: Student,
          attributes: [
            "id",
            "firstName",
            "lastName",
            "email",
            "imageUrl",
            "gpa",
          ],
        },
      ],
    });
    res.status(200).send(campuses);
  } catch (err) {
    next(err);
  }
});

// GET /api/campuses/:id
campusRouter.get("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id, {
      attributes: ["id", "name", "imageUrl", "address", "description"],
      include: [
        {
          model: Student,
          attributes: [
            "id",
            "firstName",
            "lastName",
            "email",
            "imageUrl",
            "gpa",
            "campusId"
          ],
        },
      ],
    });
    res.status(200).send(campus);
  } catch (err) {
    next(err);
  }
});

// POST /api/campuses
campusRouter.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Campus.create(req.body))
  }
  catch(err){
    next(err)
  }
});

//  DELETE /api/campuses/:id
campusRouter.delete("/:id", async (req, res, next) => {
  try{
    const campus = await Campus.findByPk(req.params.id)
    campus.destroy();
    res.status(200).send(campus)
  }
  catch(err){
    next(err)
    console.log(err)
  }
})

// PUT /api/campuses/:id
campusRouter.put("/:id", async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    console.log('req.body in server', req.body)
    res.status(200).send( await campus.update(req.body))
  }
  catch(err){
    next(err)
  }
})

module.exports = campusRouter;
