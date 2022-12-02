const db = require("../db/connection");

exports.projectListQuery = () => {
  return db.query("SELECT * from projects").then((data) => {
    return data.rows;
  });
};

exports.projectByIDQuery = (proj_id) => {
  return db
    .query(`SELECT * from projects WHERE project_id=$1`, [proj_id])
    .then((data) => {
      if (data.rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: "Project with this ID doesn't exist",
        });
      } else {
        return data.rows;
      }
    });
};

exports.pythonListQuery = () => {
  return db
    .query("SELECT * from projects WHERE language='Python';")
    .then((data) => {
      if (data.rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: "Project with this ID doesn't exist",
        });
      } else {
        return data.rows;
      }
    });
};

exports.javascriptListQuery = () => {
  return db
    .query("SELECT * from projects WHERE language='Javascript';")
    .then((data) => {
      if (data.rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: "Project with this ID doesn't exist",
        });
      } else {
        return data.rows;
      }
    });
};

exports.matlabListQuery = () => {
  return db
    .query("SELECT * from projects WHERE language='MATLAB';")
    .then((data) => {
      if (data.rows.length === 0) {
        return Promise.reject({
          status: 404,
          msg: "Project with this ID doesn't exist",
        });
      } else {
        return data.rows;
      }
    });
};
