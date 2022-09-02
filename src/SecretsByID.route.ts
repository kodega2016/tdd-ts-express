import { Application } from "express";
import { Route } from "./route";
import { SecretsByIDController } from "./SecretsByID.controller";

export class SecretsByIdRoute implements Route {
  constructor(private secretsByIDController: SecretsByIDController) {}

  mountRoute(app: Application): void {
    app.route("/api/v1/secrets/:id").get(this.secretsByIDController.getSecret);
  }
}
