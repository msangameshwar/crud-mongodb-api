const express = require("express");
const cors = require("cors");
const app = express();
const dbConn = require("./src/dbConfig/dbConfig");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ msg: "Welcome to NodeJS!" });
});

const route = require("./src/router/router");
app.use("/api", route);

const port = process.env.NODE_PORT || 3000;
app.listen(port, async () => {
  await dbConn();
  console.log(`Listening on port ${port}`);
});
