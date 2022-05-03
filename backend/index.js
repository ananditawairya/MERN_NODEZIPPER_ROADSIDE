const express = require("express");
const notes = require("./data/notes.js");
const dotenv = require("dotenv");
const app = express();
dotenv.config();
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((n) => n._id === id);
  res.json(note);
});

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log(`server started at port ${PORT}`));
