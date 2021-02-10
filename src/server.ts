import "./util/module-alias";
import { Server } from "@overnightjs/core";
import bodyParser from "body-parser";
import { ForecastController } from "./controller/forecast";
import { Application } from "express";

export class SetupServer extends Server {
  constructor(private port = 3000) {
    super();
  }

  public init(): void {
    this.setupExpress();
    this.setupControllers();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }

  private setupControllers(): void {
    const forecatController = new ForecastController();
    this.addControllers([forecatController]);
  }

  public getApp(): Application {
    return this.app;
  }
}
