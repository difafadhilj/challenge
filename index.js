// Import releated modules
const express = require("express");
const app = express();
const PORT = 4000;
const Mongoose = require("mongoose");

// Mongoose connect
Mongoose.connect("mongodb://localhost/books")
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

// Json Parser
app.use(express.json());

// Import module function
require('./app/routes/bukuAPI.js')(app);
    
// Run Server
app.listen(PORT, () => { console.log(`Server is listening on : http://localhost/${PORT}`); } );