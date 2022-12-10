const db = require('./database')

// DEFINED MODELS
const Student = require('./models/Student')
const Campus = require('./models/Campus')


// MODEL ASSOCIATIONS
Campus.hasMany(Student)
Student.belongsTo(Campus)

module.exports = {
    db,
    Student,
    Campus
}