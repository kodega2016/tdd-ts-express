import { SecretNotFoundError } from "../../../../src/domain/errors/SecretNotFoundError";

describe("SecretNotFoundError", () => {
  it("it should return an error of SecretNotFoundError", () => {
    const error = new SecretNotFoundError();
    expect(error).toBeInstanceOf(SecretNotFoundError);
    expect(error.name).toBe("SecretNotFoundError");
    expect(error.message).toBe("Secret doenot exist in the system.");
  });
});
