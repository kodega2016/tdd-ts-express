import express, { Application } from "express";
import { errorHandler } from "./middlewares/ErrorHandler";
import { Route } from "./route";

export class App {
  private expressApp: Application = express();

  constructor(private routeList: Route[]) {
    this.routeList.forEach((route) => route.mountRoute(this.expressApp));
    this.expressApp.use(errorHandler);
  }

  public getApp(): Application {
    return this.expressApp;
  }
}
