import supertest from "supertest";
import server from "../../src/server";
const request = supertest(server);

describe("Get secrets", () => {
  it("it should return an error when URL provided is shorter or invalid one", async () => {
    const response = await request.get("/api/v1/secrets/id");
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      name: "URLIDValidationError",
      message: "URL ID is too short.",
    });
  });
  it("it should return an error when the secret doenot exist in the system", async () => {
    const response = await request.get("/api/v1/secrets/iddasdsdsd");
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({
      name: "SecretNotFoundError",
      message: "Secret doenot exist in the system.",
    });
  });
  xit("it should return secret from the system when exists", async () => {});
});
