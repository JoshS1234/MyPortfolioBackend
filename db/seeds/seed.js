const db = require("../connection");
const format = require("pg-format");
const {
  convertTimestampToDate,
  createRef,
  formatComments,
} = require("./utils");

const seed = async (data) => {
  const { pythonProjects, javascriptProjects, matlabProjects, allProjects } =
    data;
  await db.query(`DROP TABLE IF EXISTS pythonProjects;`);
  await db.query(`DROP TABLE IF EXISTS javascriptProjects;`);
  await db.query(`DROP TABLE IF EXISTS matlabProjects;`);
  await db.query(`DROP TABLE IF EXISTS allProjects;`);

  // const pythonTablePromise = db.query(`
  // CREATE TABLE pythonProjects (
  //   project_id SERIAL PRIMARY KEY,
  //   name VARCHAR,
  // image VARCHAR,
  //   description VARCHAR
  // );`);

  // const javascriptTablePromise = db.query(`
  // CREATE TABLE javascriptProjects (
  //   project_id SERIAL PRIMARY KEY,
  //   name VARCHAR,
  // image VARCHAR,
  //   description VARCHAR
  // );`);

  // const matlabTablePromise = db.query(`
  // CREATE TABLE matlabProjects (
  //   project_id SERIAL PRIMARY KEY,
  //   name VARCHAR,
  // image VARCHAR,
  //   description VARCHAR
  // );`);

  const allProjectsTablePromise = db.query(`
  CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    name VARCHAR,
	image VARCHAR,
  language VARCHAR,
    description VARCHAR
  );`);

  await Promise.all([
    // pythonTablePromise,
    // javascriptTablePromise,
    // matlabTablePromise,
    allProjectsTablePromise,
  ]);

  // const insertMatlabProjectsQueryStr = format(
  //   "INSERT INTO matlabProjects (name, image, description) VALUES %L RETURNING *;",
  //   matlabProjects.map(({ name, image, description }) => [
  //     name,
  //     image,
  //     description,
  //   ])
  // );

  // const matlabPromise = db
  //   .query(insertMatlabProjectsQueryStr)
  //   .then((result) => result.rows);

  // const insertJavascriptProjectsQueryStr = format(
  //   "INSERT INTO javascriptProjects (name, image, description) VALUES %L RETURNING *;",
  //   javascriptProjects.map(({ name, image, description }) => [
  //     name,
  //     image,
  //     description,
  //   ])
  // );

  // const javascriptPromise = db
  //   .query(insertJavascriptProjectsQueryStr)
  //   .then((result) => result.rows);

  // const insertPythonProjectsQueryStr = format(
  //   "INSERT INTO pythonProjects (name, image, description) VALUES %L RETURNING *;",
  //   pythonProjects.map(({ name, image, description }) => [
  //     name,
  //     image,
  //     description,
  //   ])
  // );

  // const pythonPromise = db
  //   .query(insertPythonProjectsQueryStr)
  //   .then((result) => result.rows);

  const insertAllProjectsQueryStr = format(
    "INSERT INTO projects (name, image, language, description) VALUES %L RETURNING *;",
    allProjects.map(({ name, image, language, description }) => [
      name,
      image,
      language,
      description,
    ])
  );

  const allPromise = db
    .query(insertAllProjectsQueryStr)
    .then((result) => result.rows);

  await Promise.all([
    // javascriptPromise,
    // matlabPromise,
    // pythonPromise,
    allPromise,
  ]);
};

module.exports = seed;
