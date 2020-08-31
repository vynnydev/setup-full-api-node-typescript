import { Server } from '@overnightjs/core/lib/Server';
import './util/module-alias';
import bodyParser from 'body-parser';
import { ForecastController } from './controller/ForecastController';
import { Application } from 'express';

export class SetupServer extends Server {

  constructor(private port = 3000) {
    super();
  }

  private Setupcontrollers(): void {
    const forecastController = new ForecastController();
    this.addControllers([forecastController]);
  }

  private SetupExpress(): void {
    //decodificar dados em json
    this.app.use(bodyParser.json());
  }

  public getApp(): Application {
    return this.app;
  }

  public init(): void {
    this.SetupExpress();
    this.Setupcontrollers();
  }
}