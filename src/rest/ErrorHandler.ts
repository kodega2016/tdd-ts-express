import { NextFunction, Request, Response } from "express";
import { SecretNotFoundError } from "../SecretNotFoundError";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof SecretNotFoundError) {
    return res.status(404).json({
      name: error.name,
      message: error.message,
    });
  }

  res.status(400).json({
    name: error.name,
    message: error.message,
  });
}
