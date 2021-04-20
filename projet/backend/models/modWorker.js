const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const workersSchema = new mongoose.Schema({
  nom: String,
  profession: String,
  email: String,
  telephone: String,
  ville: String,
  user: String,
  code: String
});

workersSchema.plugin(uniqueValidator, {
  type: 'mongoose-unique-validator',
    message: 'Error, expected {PATH} to be unique.'
});



module.exports = mongoose.model('worker', workersSchema);