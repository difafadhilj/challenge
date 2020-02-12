// Import releated modules
const express = require("express");
const app = express();
const PORT = 4000;
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

// Mongoose connect
Mongoose.connect("mongodb://localhost/books")
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

// Import module function
require('./app/routes/bukuAPI.js')(app);

// Parsing data to json
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

// Routes
app.post("/books", async (request, response) => {});
app.get("/books", async (request, response) => {});
app.get("/books/:id", async (request, response) => {});
app.put("/books/:id", async (request, response) => {});
app.delete("/books/:id", async (request, response) => {});

// Run Server
app.listen(PORT, () => { console.log(`Server is listening on : http://localhost/${PORT}`); } );