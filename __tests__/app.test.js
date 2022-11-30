const pool = require(`${__dirname}/../db/connection`);
const request = require("supertest");
const seed = require("../db/seeds/seed");
const data = require("../db/data/test-data");

const app = require(`${__dirname}/../app`);

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  return pool.end();
});

//temporary
describe("GET /", () => {
  test("returns status 200", () => {
    return request(app).get("/").expect(200);
  });
  test("returns an object as the body of the response", () => {
    return request(app)
      .get("/")
      .then((res) => {
        expect(res.body).toBeInstanceOf(Object);
      });
  });
  test("returns a string as the body or the response", () => {
    return request(app)
      .get("/")
      .then((res) => {
        expect(typeof res.body.msg).toBe("string");
      });
  });
});

//Proper
describe("GET /projects", () => {
  test("returns status 200", () => {
    return request(app).get("/projects").expect(200);
  });
  test("returns an array as the body of the response", () => {
    return request(app)
      .get("/projects")
      .then((res) => {
        console.log(res.body);
        expect(res.body.projects).toBeInstanceOf(Array);
      });
  });
  test("returns an array with length 4", () => {
    return request(app)
      .get("/projects")
      .then((res) => {
        expect(res.body.projects.length).toBe(4);
      });
  });
  test("returns an array with each element being an object with id, name, image, language, description (correctly typed)", () => {
    return request(app)
      .get("/projects")
      .then((res) => {
        res.body.projects.forEach((element) => {
          expect(element).toHaveProperty("project_id", expect.any(Number));
          expect(element).toHaveProperty("name", expect.any(String));
          expect(element).toHaveProperty("image_url", expect.any(String));
          expect(element).toHaveProperty("video_url", expect.any(String));
          expect(element).toHaveProperty("github", expect.any(String));
          expect(element).toHaveProperty("hosted", expect.any(String));
          expect(element).toHaveProperty("language", expect.any(Array));
          expect(element).toHaveProperty("otherTech", expect.any(String));
          expect(element).toHaveProperty("description", expect.any(String));
          expect(element).toHaveProperty("year", expect.any(Integer));
        });
      });
  });
});

//Proper
describe("GET /projects/python", () => {
  test("returns status 200", () => {
    return request(app).get("/projects/python").expect(200);
  });
  test("returns an array as the body of the response", () => {
    return request(app)
      .get("/projects/python")
      .then((res) => {
        console.log(res.body);
        expect(res.body.projects).toBeInstanceOf(Array);
      });
  });
  test("returns an array with length 4", () => {
    return request(app)
      .get("/projects/python")
      .then((res) => {
        expect(res.body.projects.length).toBe(4);
      });
  });
  test("returns an array with each element being an object with id, name, image, language, description (correctly typed)", () => {
    return request(app)
      .get("/projects/python")
      .then((res) => {
        res.body.projects.forEach((element) => {
          expect(element).toHaveProperty("project_id", expect.any(Number));
          expect(element).toHaveProperty("name", expect.any(String));
          expect(element).toHaveProperty("image", expect.any(String));
          expect(element).toHaveProperty("language", expect.any(String));
          expect(element).toHaveProperty("description", expect.any(String));
        });
      });
  });
});
