const db = require("../db/connection");

exports.projectListQuery = () => {
  return db
    .query("SELECT * from allprojects")
    .then((data) => {
      return data.rows;
    })
    .catch(() => {
      return Promise.reject({
        status: 404,
        msg: "Could not retrieve Python projects",
      });
    });
};

// exports.pythonListQuery = () => {
//   return db
//     .query("SELECT * from pythonprojects")
//     .then((data) => {
//       return data.rows;
//     })
//     .catch(() => {
//       return Promise.reject({
//         status: 404,
//         msg: "Could not retrieve Python projects",
//       });
//     });
// };

// exports.javascriptListQuery = () => {
//   return db
//     .query("SELECT * from javascriptprojects")
//     .then((data) => {
//       return data.rows;
//     })
//     .catch(() => {
//       return Promise.reject({
//         status: 404,
//         msg: "Could not retrieve Javascript projects",
//       });
//     });
// };

// exports.matlabListQuery = () => {
//   return db
//     .query("SELECT * from matlabprojects")
//     .then((data) => {
//       return data.rows;
//     })
//     .catch(() => {
//       return Promise.reject({
//         status: 404,
//         msg: "Could not retrieve MATLAB projects",
//       });
//     });
// };
