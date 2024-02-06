const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);

  });
});

describe("GET /api/movies/:id", () => {
    it("should return a movie by id", async () => {
      const movieId = 1; 
      const response = await request(app).get(`/api/movies/${movieId}`);
      
      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
      expect(response.body).toHaveProperty("id", movieId);
    });

    it("should return 404 for a movie that does not exist", async () => {
        const movieId = 0; 
        const response = await request(app).get(`/api/movies/${movieId}`);

        expect(response.status).toEqual(404);
    });
});