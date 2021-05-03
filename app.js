const express = require("express");

const app = express();

const mongoose = require("mongoose");

const postR = require("./routes/route");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

require("dotenv/config");

app.use("/", postR);

try {
  mongoose.connect(
    process.env.DB,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to Db")
  );
} catch (e) {
  console.log(e);
}

app.listen(3000);
