const express = require('express');

const Post = require('../models/post');

const postRoutes = express.Router();

// index
postRoutes.route('/').get((req, res) => {
  Post.find((err, posts) => { // also works: find({}, (err, posts))
    if (err) {
      res.send(err);
    } else {
      res.json(posts)
    }
  })
});

// show
postRoutes.route('/:id').get((req, res) => {
  let id = req.params.id
  Post.findById(id, (err, post) => {
    if (err) {
      res.send(err);
    } else {
      res.json(post)
    }
  })
})

// new
postRoutes.route('/new').post((req, res) => {
  let newPost = new Post(req.body)
  newPost.save((err, post) => {
    if (err) {
      res.send(err);
    } else {
      res.json(post)
    }
  })
})

// update
postRoutes.route('/update/:id').put((req, res) => {
  Post.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true }, (err, post) => {
    if (err) {
      res.send(err);
    } else {
      res.json(post)
    }
  })
})

// destroy
postRoutes.route('/destroy/:id').delete((req, res) => {
  Post.findOneAndDelete({_id: req.params.id}, req.body, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({message: `Post ${req.params.id} successfully deleted`})
    }
  })
})

module.exports = postRoutes;
