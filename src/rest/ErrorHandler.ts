import { NextFunction, Request, Response } from "express";

export function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(400).json({
    name: error.name,
    message: error.message,
  });
}
