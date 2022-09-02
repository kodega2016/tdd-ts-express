import { Application } from "express";
import { App } from "./app";

const app = new App();
const expressApp: Application = app.getApp();

export default expressApp;
