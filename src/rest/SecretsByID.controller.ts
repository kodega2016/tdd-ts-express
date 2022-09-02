import { NextFunction, Request, Response } from "express";
import { URLID } from "../URLID";
import { SecretRetriever } from "./SecretRetriever";

export class SecretsByIDController {
  constructor(private secretRetriever: SecretRetriever) {}

  getSecret = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const urlID = new URLID(req.params.id);
      const secret = await this.secretRetriever.retrieveSecretById(urlID);
    } catch (e) {
      next(e);
    }
  };
}
