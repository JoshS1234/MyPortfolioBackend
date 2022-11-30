const express = require("express");
const {
  getPythonList,
  getJavascriptList,
  getMatlabList,
  getAllProjectsList,
} = require("./controllers/projectControllers");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "get request on main API" });
});

app.get("/projects", getAllProjectsList);

app.get("/projects/python", getPythonList);

app.get("/projects/javascript", getJavascriptList);

app.get("/projects/matlab", getMatlabList);

app.use((err, req, res, next) => {
  if (err.status && err.msg) {
    res.status(err.status).send({ msg: err.msg });
  } else {
    next(err);
  }
});

//error handling
app.use((err, req, res, next) => {
  console.log(res);
  console.log(err);
  console.log(err.code);
  res.status(500).send({ msg: "general error catch" });
});

module.exports = app;
