const mongoose = require("mongoose");
require("dotenv").config();
// const env = require("./enviorment");
console.log(process.env.db);
mongoose.connect(`${process.env.db1}`);
//(`mongodb://localhost/polling_dev`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

db.once("open", function () {
  console.log("Connected to DB");
});

module.exports = db;
