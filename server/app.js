const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;

