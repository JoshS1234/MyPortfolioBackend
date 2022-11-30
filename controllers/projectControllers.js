const {
  // pythonListQuery,
  // javascriptListQuery,
  // matlabListQuery,
  projectListQuery,
} = require("../models/projectModels");

exports.getAllProjectsList = (req, res, next) => {
  return projectListQuery()
    .then((data) => {
      return res.status(200).send({ projectList: data });
    })
    .catch((err) => {
      next(err);
    });
};

exports.getPythonList = (req, res, next) => {
  return pythonListQuery()
    .then((data) => {
      return res.status(200).send({ projectList: data });
    })
    .catch((err) => {
      next(err);
    });
};

// exports.getJavascriptList = (req, res, next) => {
//   return javascriptListQuery()
//     .then((data) => {
//       return res.status(200).send({ projectList: data });
//     })
//     .catch((err) => {
//       next(err);
//     });
// };

// exports.getMatlabList = (req, res, next) => {
//   return matlabListQuery()
//     .then((data) => {
//       return res.status(200).send({ projectList: data });
//     })
//     .catch((err) => {
//       next(err);
//     });
// };
