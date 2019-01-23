const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const keys = require('./config/keys');
require('./models/post')

const app = express();

app.use(cors());
app.use(bodyParser.json());

const router = express.Router()

// Home Page route
router.get('/', (req, res) => {
  res.send("Home Page")
})

// mlab
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


const PORT = process.env.PORT || 3000; // for production deployment use standard host port, for dev we use 3000

app.listen(PORT, () => {
  console.log("Server is running on Port: ", PORT);
})


// module.exports = app;
