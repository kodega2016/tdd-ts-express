import { NextFunction, Request, Response } from "express";
import { URLIDValidationError } from "./URLIDValidationError";

export class SecretsByIDController {
  getSecret = (req: Request, res: Response, next: NextFunction) => {
    next(new URLIDValidationError("URL ID is too short."));
  };
}
