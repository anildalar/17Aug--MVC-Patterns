
const { mongoose }  = require('../config/db')


const Cat = mongoose.model('Cat', { name: String });

exports.Cat = Cat;