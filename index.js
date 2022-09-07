const express = require("express");
const cors = require("cors");
const app = express();
const databaseConn = require("./src/dbConfig/dbConfig");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Default route
app.get("/", (req, res) => {
  res.send({ message: "Welcome to Nodejs API" });
});

const routes = require("./src/routers/router");
app.use("/api", routes);

const port = process.env.SERVER_PORT || 3000;
app.listen(port, async () => {
  await databaseConn();
  console.log(`listening on port:${port}`);
});
