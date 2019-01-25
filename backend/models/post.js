const mongoose = require('mongoose');
const Schema = mongoose.Schema; // can also write const { Schema } = mongoose;

let Post = new Schema({
  text: {
    type: String,
    maxlength: 280,
    required: true,
  }
});

module.exports = mongoose.model('Post', Post);
