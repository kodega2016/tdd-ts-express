import { Application } from "express";

export interface Route {
  mountRoute(app: Application): void;
}
