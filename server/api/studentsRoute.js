const router = require('express').Router();
const { Student } = require('../db')

// GET /api/students
router.get('/', async (req, res, next) => {
    try{
        const students = await Student.findAll()
        res.send(students)
    }
    catch(err){
        next(err)
    }
})


module.exports = router