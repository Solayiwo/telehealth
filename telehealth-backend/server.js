// import packages
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const app = express(); // initialising server

dotenv.config(); // configure environment variable

// Launch Server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
