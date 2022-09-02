import { Application } from "express";
import { App } from "./rest/app";
import { Route } from "./rest/route";
import { SecretsByIDController } from "./rest/SecretsByID.controller";
import { SecretsByIdRoute } from "./rest/SecretsByID.route";

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
