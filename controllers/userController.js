const mongoose = require('mongoose');
const passport = require('passport');
const authRouter = require('express').Router();
const jwt = require('express-jwt');

const User = require('../models/user')


const getTokenFromHeaders = (req) => {

  const { headers: { authorization } } = req

  if (authorization && authorization.split(' ')[0] === 'Token') {
    return authorization.split(' ')[1];
  }

  return null;
}

const auth = {
  required: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokenFromHeaders
  }),
  optional: jwt({
    secret: 'secret',
    userProperty: 'payload',
    getToken: getTokenFromHeaders,
    credentialsRequired: false
  })
}


authRouter.route('/').post(auth.optional, (req, res) => {
  const { body: { user }} = req;

  if (!user.email) {
    return res.status(422).json({errors: {email: 'is required'}})
  }
  if (!user.password) {
    return res.status(422).json({errors: {password: 'is required'}})
  }

  const newUser = new User(user);
  newUser.setPassword(user.password);
  return newUser.save().then(() => {
    res.json({user: newUser.toAuthJSON() })
  })
})

authRouter.route('/login').post(auth.optional, (req, res, next) => {
  const { body: { user }} = req;

  if (!user.email) {
    return res.status(422).json({errors: {email: 'is required'}})
  }
  if (!user.password) {
    return res.status(422).json({errors: {password: 'is required'}})
  }

  return passport.authenticate('local', {session: false}, (err, passportUser, info) => {
    if (err) {
      return next(err);
    }

    if (passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json({ user: user.toAuthJSON() })
    }

    return status(400).info;
  })
})

authRouter.route('/current').get(auth.required, (req, res, next) => {
  const { payload: { id }} = req;

  return User.findById(id).then((user) => {
    if (!user) {
      return res.sendStatus(400);
    }

    return res.json({ user: user.toAuthJSON() })
  })
})

module.exports = authRouter
