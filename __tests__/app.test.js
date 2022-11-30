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
