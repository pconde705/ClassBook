import app from '../server.js'
import Post from '../models/post'

const mongoose = require('mongoose');
const postRoutes = express.Router();

app.use('/posts', postRoutes);

// index
postRoutes.route('/').get((req, res) => {
  Post.find((err, posts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(posts)
    }
  })
})
