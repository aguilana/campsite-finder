const campgroundRouter = require('express').Router();
const { Campground } = require("../db")

// GET /api/campground
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

module.exports = campgroundRouter