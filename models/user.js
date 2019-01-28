const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.set('useCreateIndex', true)
const { Schema } = mongoose;

const User = new Schema({
  firstName: String,
  lastName: String,
  email: {type: String, unique: true},
  password_hash: String,
  session_token: String
});

User.methods.findByCredentials = (email, password) => {
  const userArray = User.find({email: email})
  if (userArray.length == 0) {
    return null
  }
  if (userArray[0].validatePassword(password) == true) {
    return userArray[0]
  } else {
    return null
  }
}

User.methods.setPassword = (password) => {
  const saltedString = reset_session_token()
  this.password_hash = crypto.pbkdf2Sync(password, this.session_token, 10000, 512, 'sha512').toString('hex');
};

User.methods.validatePassword = (password) => {
  const hash = crypto.pbkdf2Sync(password, this.session_token, 10000, 512, 'sha512').toString('hex');
  return this.password_hash === hash;
};

User.methods.reset_session_token = () => {
  return this.session_token = crypto.randomBytes(16).toString('hex'); // salting
}

User.methods.currentUser = (session_token) => {
  const currentUserArray = User.find({session_token: session_token})
  if (currentUserArray.length == 0) {
    return null
  } else {
    return currentUserArray[0]
  }
}

User.methods.login = (user) => {
  user.reset_session_token()
  currentUser(user.session_token)
}

User.methods.logout = (user) => {
  user.session_token = null
  currentUser(user.session_token)
}

User.plugin(uniqueValidator)

module.exports = mongoose.model('User', User);
