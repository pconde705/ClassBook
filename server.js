const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const keys = require('./config/keys');

const app = express();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// mLab
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

// mongodb on computer
// mongoose.connect("mongodb://127.0.0.1:27017/classbook", { useNewUrlParser: true })

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


const PORT = process.env.PORT || 3000; // for production deployment use standard host port, for dev we use 3000
app.listen(PORT, () => {
  console.log("Server is running on Port: ", PORT);
})


// Post
const postRoutes = require('./controllers/postController');
app.use('/api/posts', postRoutes);
