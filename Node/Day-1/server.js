const express = require("express");

const mongoose = require("mongoose");

const app = express();

const PORT = 3000;

app.get("/",(req, res) => {
    res.send("Hello from API!!");
});

app.get("/home",(req,res) => {
    res.send("Hello, Guvi");
});

app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});

mongoose
    .connect("mongodb://127.0.0.1:27017/test")
    .then(() => console.log("DB Connected!"));

function operation(a,b) {
    return a + b;
}