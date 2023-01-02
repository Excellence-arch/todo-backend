const app = require("express")();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

const URI = process.env.URI;
const PORT = process.env.PORT;

mongoose.connect(URI, (err) => {
  if (err) console.error("Error connecting to the databse");
  else console.log("Connection to the database established");
});

app.listen(PORT, () => console.log(`App started listening on ${PORT}`));
