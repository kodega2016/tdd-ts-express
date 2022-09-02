import { URLIDValidationError } from "../src/URLIDValidationError";

describe("URLIDValidationError", () => {
  it("it should create a URLIDValidationError error", () => {
    const error = new URLIDValidationError("URL ID is too short");
    expect(error).toBeInstanceOf(URLIDValidationError);
    expect(error.name).toBe("URLIDValidationError");
    expect(error.message).toBe("URL ID is too short");
  });
});
