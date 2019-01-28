const mongoose = require('mongoose');
const express = require('express')
const userRouter = express.Router();

const User = require('../models/user')

userRouter.route('/signup').post((req, res) => {
  let newUser = new User(req.body)
  newUser.save((err, user) => {
    if (err) {
      res.send(err)
    } else {
      User.login(user)
      res.json(user)
    }
  })
});

module.exports = userRouter;
