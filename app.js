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
  console.log("server reached");
  res.status(200).send({ msg: "get request on main API" });
});

app.get("/projects", getAllProjectsList);

app.get("/projects/python", getPythonList);

app.get("/projects/javascript", getJavascriptList);

app.get("/projects/matlab", getMatlabList);
app.get("/projects/MATLAB", getMatlabList);

app.use((req, res, next) => {
  console.log("Request method: ", req.method);
  console.log("Request url: ", req.url);
  console.log("Time:", Date.now());
  next(); // this passes the request and response onto the following middleware function
});

module.exports = app;
