const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = require('../models/user');

passport.use(new LocalStrategy((email, password, done) => {
  User.findOne({ email }, (err, user) => { //can also be written: findOne({email: email})
    if (err) {
      return done(err)
    }
    if (!user || !user.validatePassword(password)) {
      return done(null, false, {errors: 'invalid email and/or password'})
    }
    return done(null, user)
  })
}))
