/**************************************/
//*****// Dependencies
/**************************************/

// common utils
const logger = require('morgan');
const Promise = require('bluebird');
const path = require("path");
const http = require("http");
const util = require('util');

// Express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Data dependencies
const mongoose = require('mongoose');

/**************************************/
//*****// Variable Declaration
/**************************************/

let configDB = require('./config/databaseCreds');
const app = express();
const router = express.Router();
const PORT = process.env.PORT || 5000;
let db;

/**************************************/
//*****// Database Initialization
/**************************************/

mongoose.Promise = Promise;
mongoose.connect(configDB.url, {
  useMongoClient: true,
  promiseLibrary: require('bluebird')
});

//Bind connection to error event (to get notification of connection errors)
db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

/**************************************/
//*****// Express & Webpack Middleware
/**************************************/

app.use(bodyParser.urlencoded({extended: true}));   // parse application/x-www-form-urlencoded
app.use(cors());                                    // Enable CORS from client-side
app.use(bodyParser.json());                         // parse application/json
app.use(logger('dev'));

/**************************************/
//*****// Initialize Routes
/**************************************/

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  // Fallback for client-side routing
  //  If no route is found, returns index.html instead of making non-existent request
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

/**************************************/
//*****// Initalize Port listen
/**************************************/

app.listen(PORT, () => {
  console.log(`You are listening to Andre ${PORT}`);
  console.log(`Mongo DB URI: ${configDB.url}`);
});
