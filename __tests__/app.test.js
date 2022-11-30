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
        expect(res.body.projects).toBeInstanceOf(Array);
      });
  });
  test("returns an array with correct length", () => {
    return request(app)
      .get("/projects")
      .then((res) => {
        expect(res.body.projects.length).toBe(11);
      });
  });
  test("returns an array with each element being an object, with entries correctly typed", () => {
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
          expect(element).toHaveProperty("language", expect.any(String));
          expect(element).toHaveProperty("tech", expect.any(String));
          expect(element).toHaveProperty("description", expect.any(String));
          expect(element).toHaveProperty("year", expect.any(Number));
        });
      });
  });
  test("Returns a 404 error when there is a non-valid language given after the projects endpoint", () => {
    return request(app).get("/projects/spencescript").expect(404);
  });
});

describe("GET /projects/python", () => {
  test("returns status 200", () => {
    return request(app).get("/projects/python").expect(200);
  });
  test("returns an array as the body of the response", () => {
    return request(app)
      .get("/projects/python")
      .then((res) => {
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
  test("returns an array with each element being an object, with entries correctly typed", () => {
    return request(app)
      .get("/projects/python")
      .then((res) => {
        res.body.projects.forEach((element) => {
          expect(element).toHaveProperty("project_id", expect.any(Number));
          expect(element).toHaveProperty("name", expect.any(String));
          expect(element).toHaveProperty("image_url", expect.any(String));
          expect(element).toHaveProperty("video_url", expect.any(String));
          expect(element).toHaveProperty("github", expect.any(String));
          expect(element).toHaveProperty("hosted", expect.any(String));
          expect(element).toHaveProperty("language", expect.any(String));
          expect(element).toHaveProperty("tech", expect.any(String));
          expect(element).toHaveProperty("description", expect.any(String));
          expect(element).toHaveProperty("year", expect.any(Number));
        });
      });
  });
  test("All projects returned have python as the language", () => {
    return request(app)
      .get("/projects/python")
      .then((res) => {
        res.body.projects.forEach((element) => {
          expect(element.language).toBe("Python");
        });
      });
  });
});

describe("GET /projects/javascript", () => {
  test("returns status 200", () => {
    return request(app).get("/projects/javascript").expect(200);
  });
  test("returns an array as the body of the response", () => {
    return request(app)
      .get("/projects/javascript")
      .then((res) => {
        expect(res.body.projects).toBeInstanceOf(Array);
      });
  });
  test("returns an array with length 4", () => {
    return request(app)
      .get("/projects/javascript")
      .then((res) => {
        expect(res.body.projects.length).toBe(4);
      });
  });
  test("returns an array with each element being an object, with entries correctly typed", () => {
    return request(app)
      .get("/projects/javascript")
      .then((res) => {
        res.body.projects.forEach((element) => {
          expect(element).toHaveProperty("project_id", expect.any(Number));
          expect(element).toHaveProperty("name", expect.any(String));
          expect(element).toHaveProperty("image_url", expect.any(String));
          expect(element).toHaveProperty("video_url", expect.any(String));
          expect(element).toHaveProperty("github", expect.any(String));
          expect(element).toHaveProperty("hosted", expect.any(String));
          expect(element).toHaveProperty("language", expect.any(String));
          expect(element).toHaveProperty("tech", expect.any(String));
          expect(element).toHaveProperty("description", expect.any(String));
          expect(element).toHaveProperty("year", expect.any(Number));
        });
      });
  });
  test("All projects returned have python as the language", () => {
    return request(app)
      .get("/projects/javascript")
      .then((res) => {
        res.body.projects.forEach((element) => {
          expect(element.language).toBe("Javascript");
        });
      });
  });
});

describe("GET /projects/matlab", () => {
  test("returns status 200", () => {
    return request(app).get("/projects/matlab").expect(200);
  });
  test("returns an array as the body of the response", () => {
    return request(app)
      .get("/projects/matlab")
      .then((res) => {
        expect(res.body.projects).toBeInstanceOf(Array);
      });
  });
  test("returns an array with length 4", () => {
    return request(app)
      .get("/projects/matlab")
      .then((res) => {
        expect(res.body.projects.length).toBe(3);
      });
  });
  test("returns an array with each element being an object, with entries correctly typed", () => {
    return request(app)
      .get("/projects/matlab")
      .then((res) => {
        res.body.projects.forEach((element) => {
          expect(element).toHaveProperty("project_id", expect.any(Number));
          expect(element).toHaveProperty("name", expect.any(String));
          expect(element).toHaveProperty("image_url", expect.any(String));
          expect(element).toHaveProperty("video_url", expect.any(String));
          expect(element).toHaveProperty("github", expect.any(String));
          expect(element).toHaveProperty("hosted", expect.any(String));
          expect(element).toHaveProperty("language", expect.any(String));
          expect(element).toHaveProperty("tech", expect.any(String));
          expect(element).toHaveProperty("description", expect.any(String));
          expect(element).toHaveProperty("year", expect.any(Number));
        });
      });
  });
  test("All projects returned have python as the language", () => {
    return request(app)
      .get("/projects/matlab")
      .then((res) => {
        res.body.projects.forEach((element) => {
          expect(element.language).toBe("MATLAB");
        });
      });
  });
});
