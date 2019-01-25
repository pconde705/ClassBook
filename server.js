const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const keys = require('./config/keys');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve static files from React into an auto created build folder
app.use(express.static(path.join(__dirname, 'frontend/build')));


// mLab
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

// mongodb on computer
// mongoose.connect("mongodb://127.0.0.1:27017/classbook", { useNewUrlParser: true })

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

// Post
const postRoutes = require('./controllers/postController');
app.use('/api/posts', postRoutes);


// If any request doesn't match, we send it back to React
// build file created after the push to heroku is made
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/frontend/build/index.html'))
})

const PORT = process.env.PORT || 3000; // for production deployment use standard host port, for dev we use 3000
app.listen(PORT, () => {
  console.log("Server is running on Port: ", PORT);
})
