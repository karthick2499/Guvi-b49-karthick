const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

const Mentor = require("./models/Mentor");
const Student = require("./models/Student");

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

const DB_URL = "mongodb+srv://karthickms2499:Karan205486nom@cluster0.h7yfby7.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

  app.post("/mentor", async (req, res) => {
    try {
      const mentor = new Mentor(req.body);
      await mentor.save();
      res.status(201).send(mentor);
    } catch (error) {
      res.status(400).send(error);
    }
  });


  app.post("/student", async (req, res) => {
    try {
      const student = new Student(req.body);
      await student.save();
      res.status(201).send(student);
    } catch (error) {
      res.status(400).send(error);
    }
  });


  app.post("/mentor/:mentorId/assign", async (req, res) => {
    try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const students = await Student.find({ _id: { $in: req.body.students } });

    } catch (error) {
      res.status(400).send(error);
    }
  });
  
  

app.listen(PORT, () => {
  console.log("Server is running on PORT", PORT);
  });
  