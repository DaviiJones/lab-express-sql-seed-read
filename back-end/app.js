const express = require('express');
const cors = require ("cors");
const app = express();
const port = 1234;

const MusicController = require("./controllers/songController");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("welcome");
  });

  app.get("*", (req, res) => {
    res.status(404).json({ success: false, data: { error: "Nobodies Home..." } });
  });
  module.exports = app;