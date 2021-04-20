const mongoose = require('mongoose'); //Mongoose Model
const uniqueValidator = require('mongoose-unique-validator');

const adminsSchema = new mongoose.Schema({
  name: String,
  password: String
});

adminsSchema.plugin(uniqueValidator, {
  type: 'mongoose-unique-validator',
    message: 'Error, expected {PATH} to be unique.'
});
module.exports = mongoose.model('admin', adminsSchema);