const campgroundRouter = require('express').Router();
const { Campground } = require("../db")

// GET /api/campgrounds
campgroundRouter.get("/", async (req, res, next)=>{
    try{
        const campgrounds = await Campground.findAll();
        res.status(200).send(campgrounds)
    }
    catch(err){
        console.log("Error: ", err)
        next(err)
    }
});

// DELETE /api/campgrounds/:id
campgroundRouter.delete("/:id", async (req, res, next) => {
    try {
        const deletedCampground = await Campground.findByPk(req.params.id)
        if (!deletedCampground){
            let err = new Error("Cannot remove campground");
            next(err)
        } else {
            await deletedCampground.destroy();
            res.status(200).send(deletedCampground)
        }
    }
    catch(err){
        next(err)
    }
})

// GET /api/campgrounds/:id
campgroundRouter.get("/:id", async (req, res, next) => {
    try{
        const id = req.params.id
        const singleCampground = await Campground.findByPk(id);
        res.status(200).send(singleCampground)
    }
    catch(err){
        next(err)
    }
})

// POST /api/campgrounds/create
campgroundRouter.post("/create", async (req, res, next) => {
    try {
        const createCampground = await Campground.create(req.body)
        res.status(201).send(createCampground)
    }
    catch(err){
        next(err)
    }
})

// PUT /api/campgrounds/:id/edit
campgroundRouter.put("/:id/edit", async (req, res, next) => {
    try {
        const editCampground = await Campground.findByPk(req.params.id)
        res.status(200).send(await editCampground.update(req.body))
    }
    catch(err){
        next(err)
    }
})


module.exports = campgroundRouter