const {
  pythonListQuery,
  javascriptListQuery,
  matlabListQuery,
  projectListQuery,
} = require("../models/projectModels");

exports.getAllProjectsList = (req, res, next) => {
  return projectListQuery()
    .then((data) => {
      return res.status(200).send({ projects: data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getPythonList = (req, res, next) => {
  return pythonListQuery()
    .then((data) => {
      return res.status(200).send({ projects: data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getJavascriptList = (req, res, next) => {
  return javascriptListQuery()
    .then((data) => {
      return res.status(200).send({ projects: data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getMatlabList = (req, res, next) => {
  return matlabListQuery()
    .then((data) => {
      return res.status(200).send({ projects: data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getJSONinstructions = (req, res, next) => {
  return fs.readFile(`${__dirname}/../endpoints.json`, "utf-8").then((data) => {
    data = JSON.parse(data);
    res.status(200).send({ data });
  });
};
