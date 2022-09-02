import { request, Request, response, Response } from "express";
import { SecretNotFoundError } from "../../src/domain/errors/SecretNotFoundError";
import { URLIDValidationError } from "../../src/domain/errors/URLIDValidationError";
import { URLID } from "../../src/domain/models/URLID";
import { SecretsByIDController } from "../../src/infra/rest/SecretsByID.controller";
import { SecretRetriever } from "../../src/services/SecretRetriever";

describe("SecretsByIDController", () => {
  it("it should throw an error when the url is too short", () => {
    const secretRetriever: SecretRetriever = {
      retrieveSecretById: jest.fn(),
    };
    const secretsByIDController = new SecretsByIDController(secretRetriever);
    const secretID = "id";
    const next = jest.fn();
    const req: Request = expect.any(request);
    req.params = {
      id: secretID,
    };
    const res: Response = expect.any(response);

    secretsByIDController.getSecret(req, res, next);

    expect(next).toBeCalled();
    expect(next).toBeCalledWith(
      new URLIDValidationError("URL ID is too short.")
    );
    expect(secretRetriever.retrieveSecretById).toBeCalledTimes(0);
  });

  it("should throw an error if the secret was not found", () => {
    const secretID = "id";
    const next = jest.fn();
    const req: Request = expect.any(request);
    req.params = {
      id: "mySecretID",
    };
    const res: Response = expect.any(response);

    const secretRetriever: SecretRetriever = {
      retrieveSecretById: jest.fn().mockImplementationOnce(() => {
        throw new SecretNotFoundError();
      }),
    };
    const secretsByIDController = new SecretsByIDController(secretRetriever);

    secretsByIDController.getSecret(req, res, next);

    expect(next).toBeCalled();
    expect(next).toBeCalledWith(new SecretNotFoundError());
    expect(secretRetriever.retrieveSecretById).toBeCalledTimes(1);
    expect(secretRetriever.retrieveSecretById).toBeCalledWith(
      new URLID("mySecretID")
    );
  });
});
