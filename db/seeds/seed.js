const db = require("../connection");
const format = require("pg-format");
// const {
//   convertTimestampToDate,
//   createRef,
//   formatComments,
// } = require("./utils");

const seed = async (data) => {
  const { allProjects } = data;
  await db.query(`DROP TABLE IF EXISTS projects;`);

  const allProjectsTablePromise = db.query(`
  CREATE TABLE projects (
    project_id SERIAL PRIMARY KEY,
    name VARCHAR,
    image_url VARCHAR,
    video_url VARCHAR,
    github VARCHAR,
    hosted VARCHAR,
    language VARCHAR,
    otherTech VARCHAR,
    description VARCHAR,
    year INTEGER 
  );`);

  await Promise.all([allProjectsTablePromise]);

  const insertAllProjectsQueryStr = format(
    "INSERT INTO projects (name, image_url, video_url, github, hosted, language, otherTech, description, year) VALUES %L RETURNING *;",
    allProjects.map(
      ({
        name,
        image_url,
        video_url,
        github,
        hosted,
        language,
        otherTech,
        description,
        year,
      }) => [
        name,
        image_url,
        video_url,
        github,
        hosted,
        language,
        otherTech,
        description,
        year,
      ]
    )
  );

  const allPromise = db
    .query(insertAllProjectsQueryStr)
    .then((result) => result.rows);

  await Promise.all([allPromise]);
};

module.exports = seed;
