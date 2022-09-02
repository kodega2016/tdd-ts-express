import { request, Request, response, Response } from "express";
import { SecretsByIDController } from "../../src/rest/SecretsByID.controller";
import { URLIDValidationError } from "../../src/URLIDValidationError";

describe("SecretsByIDController", () => {
  it("it should throw an error when the url is too short", () => {
    const secretsByIDController = new SecretsByIDController();
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
  });
});
