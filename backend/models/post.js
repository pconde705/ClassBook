const moongoose = require('mongoose');
const Schema = mongoose.Schema; // can also write const { Schema } = mongoose;

let Post = new Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Post', Post);
