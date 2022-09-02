import { URLID } from "../../src/URLID";
import { URLIDValidationError } from "../../src/URLIDValidationError";

describe("URLID", () => {
  it("it should validate the url id", () => {
    expect(new URLID("1121212")).toBeInstanceOf(URLID);
  });
  it("it should throw an error when URLId is too short", () => {
    expect(() => new URLID("1")).toThrow(
      new URLIDValidationError("URL ID is too short.")
    );
  });
});
