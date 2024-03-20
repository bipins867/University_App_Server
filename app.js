require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./database");
const { setupRotes } = require("./Routes/setupRoutes");

require("./Models/setModels");

app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);
app.use(bodyParser.json({ extends: false }));

setupRotes(app);

db.sync({ alter: true })
  .then(() => {
    app.listen(process.env.APP_PORT);
  })
  .catch((err) => console.log(err));
