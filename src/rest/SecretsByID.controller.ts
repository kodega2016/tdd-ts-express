import { NextFunction, Request, Response } from "express";
import { SecretNotFoundError } from "../SecretNotFoundError";
import { URLID } from "../URLID";

export class SecretsByIDController {
  getSecret = (req: Request, res: Response, next: NextFunction) => {
    try {
      // next(new SecretNotFoundError());
      const urlID = new URLID(req.params.id);
      throw new SecretNotFoundError();
    } catch (e) {
      next(e);
    }
  };
}
