import express, { Application } from "express";

export class App {
  private expressApp: Application = express();

  public getApp(): Application {
    return this.expressApp;
  }
}
