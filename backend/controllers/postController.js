import app from '../server.js'
import Post from '../models/post'

const mongoose = require('mongoose');
const postRoutes = express.Router();

app.use('/posts', postRoutes);

// index
postRoutes.route('/').get((req, res) => {
  Post.find((err, posts) => { // also works: find({}, (err, posts))
    if (err) {
      console.log(err);
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
      console.log(err);
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
      console.log(err);
    } else {
      res.json(post)
    }
  })
})

// update
postRoutes.route('/update/:id').put((req, res) => {
  Post.findOneAndUpdate({_id: req.params.postId}, req.body, (err, post) => {
    if (err) {
      console.log(err);
    } else {
      res.json(post)
    }
  })
})

// destroy
postRoutes.route('/destroy/:id').delete((req, res) => {
  Post.findOneAndDelete({_id: req.params.postId}, req.body, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.json({message: `Post ${req.params.postId} successfully deleted`})
    }
  })
})
