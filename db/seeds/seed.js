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
  await db.query(`DROP TABLE IF EXISTS projects;`);

  const allProjectsTablePromise = db.query(`
  CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    name VARCHAR,
	image VARCHAR,
  language VARCHAR,
    description VARCHAR
  );`);

  await Promise.all([allProjectsTablePromise]);

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

  await Promise.all([allPromise]);
};

module.exports = seed;
