
const sessionRouter = require('express').Router();

const User = require('../models/user')

sessionRouter.route('/login').post((req, res) => {
  const user = User.findByCredentials(req.params.email, req.params.password)

  if (user !== null) {
    User.login(user)
  } else {
    res.json({error: {message: "Invalid email and/or password"}})
  }
})

sessionRouter.route('/logout').post((req, res) => {
  const user = User.findByCredentials(req.params.email, req.params.password)

  if (user !== null) {
    User.logout(user)
  } else {
    res.json({error: {message: "Log in required"}})
  }
})

module.exports = sessionRouter;
