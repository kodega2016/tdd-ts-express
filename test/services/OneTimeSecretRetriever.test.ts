import { SecretNotFoundError } from "../../src/domain/errors/SecretNotFoundError";
import { URLID } from "../../src/domain/models/URLID";
import { OneTimeSecretRetriever } from "../../src/services/OneTimeSecretRetriever";
import { SecretRepository } from "../../src/services/SecretRepository";

describe("OneTimeSecretRetriever", () => {
  it("it should throw an error if the secret is not found", () => {});

  const secretRespository: SecretRepository = {
    getSecretById: jest.fn().mockResolvedValue(null),
  };

  const oneTimeSecretRetriever = new OneTimeSecretRetriever(secretRespository);

  const urlID = new URLID("myuid");

  expect(oneTimeSecretRetriever.retrieveSecretById(urlID)).rejects.toThrow(
    SecretNotFoundError
  );
  expect(secretRespository.getSecretById).toBeCalledTimes(1);
  expect(secretRespository.getSecretById).toBeCalledWith(urlID);
});
