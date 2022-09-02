import { NextFunction, request, Request, response, Response } from "express";
import { errorHandler } from "../../src/rest/ErrorHandler";
import { URLIDValidationError } from "../../src/URLIDValidationError";

describe("ErrorHandler", () => {
  it("should generate an error response for a URLIDValidationError", () => {
    const error = new URLIDValidationError("URL ID is too short.");

    const next: NextFunction = jest.fn();
    const req: Request = expect.any(request);
    req.params = {
      id: "id",
    };
    const res: Response = expect.any(response);
    res.status = jest.fn().mockReturnThis();
    res.json = jest.fn();

    errorHandler(error, req, res, next);

    expect(next).toBeCalledTimes(0);
    expect(res.status).toBeCalledTimes(1);
    expect(res.status).toBeCalledWith(400);
    expect(res.json).toBeCalledTimes(1);
    expect(res.json).toBeCalledWith({
      name: "URLIDValidationError",
      message: "URL ID is too short.",
    });
  });
});
