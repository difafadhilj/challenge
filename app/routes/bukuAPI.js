module.exports = function(app){
// Import releated module
const Mongoose = require("mongoose");
const express = require("express");
app.use(express.json());
// Mongoose instance
const BookModel = Mongoose.model("books", {
   title:  String,
   author: [String],
   published_date: Date,
   pages: Number,
   language: String,
   publisher_id: String
});

    // Create data
    app.post("/books", async (request, response) => {
        try {
            var book = new BookModel(request.body);
            var result = await book.save();
            response.status(201).send(result);
        } catch (error) {
            response.status(404).send(error);
        }
    });

    // Get all data
    app.get("/books", async (request, response) => {
        try {
            var result = await BookModel.find().exec();
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send(error);
        }
    });

    // Get data by id
    app.get("/books/:id", async (request, response) => {
        try {
            var book = await BookModel.findById(request.params.id).exec();
            response.status(200).send(book);
        } catch (error) {
            response.status(404).send(error);
        }
    });

    // Update data
    app.put("/books/:id", async (request, response) => {
        try {
            var book = await BookModel.findById(request.params.id).exec();
            book.set(request.body);
            var result = await book.save();
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send(error);
        }
    });

    // Delete data
    app.delete("/books/:id", async (request, response) => {
        try {
            let result = await BookModel.deleteOne({ _id: request.params.id }).exec();
            response.status(200).send(result);
        } catch (error) {
            response.status(404).send(error);
        }   
    });

};