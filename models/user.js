const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const {Schema} = mongoose;

let User = new Schema({
  email: String,
  hash: String,
  salt: String
})

User.methods.setPassword = (password) => {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}

User.methods.validatePassword = (password) => {
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
  return hash === this.hash
}

User.methods.generateJWT = () => {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 30)

  return jwt.sign({
    id: this._id,
    email: this.email,
    expiration: parseInt(expirationDate.getTime / 1000, 10)
  }, 'secret');
}

User.methods.toAuthJSON = () => {
  return {
    _id: this._id,
    email: this.email,
    token: this.generateJWT()
  }
}

module.exports = mongoose.model('User', User);
