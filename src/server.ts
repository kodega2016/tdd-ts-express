import { Application } from "express";
import { App } from "./infra/rest/app";
import { Route } from "./infra/rest/route";
import { SecretsByIDController } from "./infra/rest/SecretsByID.controller";
import { SecretsByIdRoute } from "./infra/rest/SecretsByID.route";

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
