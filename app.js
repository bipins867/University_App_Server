require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./database");
const homeRouter = require("./Routes/home");

require("./Models/setModels");

app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(bodyParser.json({ extends: false }));

app.use("/home", homeRouter);

db.sync({ alter: true })
  .then(() => {
    app.listen(process.env.APP_PORT);
  })
  .catch((err) => console.log(err));
