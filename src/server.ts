import { Application } from "express";
import { App } from "./app";
import { Route } from "./route";
import { SecretsByIDController } from "./SecretsByID.controller";
import { SecretsByIdRoute } from "./SecretsByID.route";

const secretsByIDController: SecretsByIDController =
  new SecretsByIDController();
const secretsByIdRoute: SecretsByIdRoute = new SecretsByIdRoute(
  secretsByIDController
);

const routeList: Route[] = [];
routeList.push(secretsByIdRoute);

const app = new App(routeList);
const expressApp: Application = app.getApp();

export default expressApp;
