const db = require("../connection");
const format = require("pg-format");

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
    tech VARCHAR,
    description VARCHAR,
    year INTEGER 
  );`);

  await Promise.all([allProjectsTablePromise]);

  const insertAllProjectsQueryStr = format(
    "INSERT INTO projects (name, image_url, video_url, github, hosted, language, tech, description, year) VALUES %L RETURNING *;",
    allProjects.map(
      ({
        name,
        image_url,
        video_url,
        github,
        hosted,
        language,
        tech,
        description,
        year,
      }) => [
        name,
        image_url,
        video_url,
        github,
        hosted,
        language,
        tech,
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
