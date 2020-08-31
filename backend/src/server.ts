import { Server } from '@overnightjs/core/lib/Server';
import './util/module-alias';
import bodyParser from 'body-parser';

export class SetupServer extends Server {

  constructor(private port = 3000) {
    super()
  }

  private SetupExpress(): void {
    //decodificar dados em json
    this.app.use(bodyParser.json())
  }

  public init(): void {
    this.SetupExpress()
  }
}