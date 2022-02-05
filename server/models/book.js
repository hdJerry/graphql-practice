const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: true
  },
  genre: {
    type: String,
    default: '',
    required: true
  },
  authorid: {
    type: String,
    default: '',
    required: true
  }
});

const book = mongoose.model('Book', bookSchema);
module.exports = book;