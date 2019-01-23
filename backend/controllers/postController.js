const express = require('express');
const Post = require('../models/post');
const postRoutes = express.Router();


// index
postRoutes.route('/posts').get((req, res) => {
  Post.find((err, posts) => { // also works: find({}, (err, posts))
    if (err) {
      res.send(err);
    } else {
      res.json(posts)
    }
  })
});

// show
postRoutes.route('/posts/:id').get((req, res) => {
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
postRoutes.route('/posts/new').post((req, res) => {
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
postRoutes.route('/posts/update/:id').put((req, res) => {
  Post.findOneAndUpdate({_id: req.params.postId}, req.body, (err, post) => {
    if (err) {
      res.send(err);
    } else {
      res.json(post)
    }
  })
})

// destroy
postRoutes.route('/posts/destroy/:id').delete((req, res) => {
  Post.findOneAndDelete({_id: req.params.postId}, req.body, (err) => {
    if (err) {
      res.send(err);
    } else {
      res.json({message: `Post ${req.params.postId} successfully deleted`})
    }
  })
})
