const db = require('./database')

// put models here
// i.e. const Puppy = require('./puppy')
// i.e. const Candy = require('./models/candy')

const Student = require('./models/Student')
const Campus = require('./models/Campus')


// after require model establish associations here


module.exports = {
    db,
    Student,
    Campus
}