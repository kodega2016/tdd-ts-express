import { SecretValidationError } from "../../../../src/domain/errors/SecretValidationError";
import { Secret } from "../../../../src/domain/models/Secret";

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
