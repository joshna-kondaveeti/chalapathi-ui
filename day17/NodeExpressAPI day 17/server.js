const express = require('express');
const bodyParser = require('body-parser');
/* First two lines imports all the methods of the two packages */

// create express app
const app = express();

// Setup server port
//const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/db.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
/* can access mongoose from anywhere AND promise = task (insertion,creation,deletion*/
// Connecting to the database
mongoose.connect(dbConfig.url, {
//useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database.', err);
  process.exit();
});
/*inherited exception handling = can use catch block without try block in JS(NODE JS) */

// define a root/default route
app.get('/', (req, res) => {
  res.json({"message": "Hello World"});
});

// Require Users routes
const userRoutes = require('./src/routes/user.routes')
// using as middleware
app.use('/api/users', userRoutes)

// listen for requests
app.listen(4000, () => {
  console.log(`Node server is listening on port `);
});
