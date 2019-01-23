const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://127.0.0.1:27017/ClassBook', { useNewUrlParser: true })
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})


const PORT = process.env.PORT || 3000; // for production deployment use standard host port, for dev we use 3000
app.listen(PORT, () => {
  console.log("Server is running on Port: ", PORT);
})


module.exports = app;
