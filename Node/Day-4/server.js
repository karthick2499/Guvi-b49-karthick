const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

const DB_URL = "mongodb://0.0.0.0:27017/admin";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publishedDate: String,
  });
  
  const Book = mongoose.model("Book", bookSchema);

app.use(bodyParser.json());

mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));



  app.post("/book", async (req, res) => {
    const book = new Book(req.body);
    try {
      const savedBook = await book.save();
      res.status(201).send(savedBook);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });


  app.get("/books", async (req, res) => {
    try {
      const books = await Book.find();
      res.status(201).send(books);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

  app.get("/book/:id", async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.status(201).send(book);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });


  app.put("/book/:id", async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(201).send(book);
    } catch (error) {
      res.status(400).send(error.message);
    }
  });


  app.delete("/book/:id", async (req, res) => {
    try {
      const result = await Book.findByIdAndDelete(req.params.id);
      if (result) res.status(201).send({ message: "Book deleted successfully!" });
      else res.status(404).send("Book not found");
    } catch (error) {
      res.status(400).send(error.message);
    }
  });

app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
  });
  