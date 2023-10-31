const express = require("express");
const cors = require("cors");
const app = express();
const songController = require("./controllers/songController.js")
app.use(cors());
app.use(express.json());

app.use("/songs", songController);


app.get("/", (req, res) => {
  res.send("Took a Break Till 9:30PM :D");
});

app.get("*", (req, res) => {
  res.status(404).json({ success: false, data: { error: "page not found" } });
});
module.exports = app;