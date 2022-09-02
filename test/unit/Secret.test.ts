import { Secret } from "../../src/rest/Secret";
import { SecretValidationError } from "../../src/SecretValidationError";

describe("Secret", () => {
  it("it should create an instance of Secret", () => {
    expect(new Secret("mySecret")).toBeInstanceOf(Secret);
  });
  it("it should throw an error when secret is too short.", () => {
    expect(() => new Secret("w")).toThrow(
      new SecretValidationError("Secret is too short.")
    );
  });
});
