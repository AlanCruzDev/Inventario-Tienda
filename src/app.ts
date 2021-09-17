import express from "express";
import cors from "cors";
import http, { createServer } from "http";

export default class App {
  public app: express.Application;
  public port: number;
  public httpServer: http.Server;

  constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;
    this.httpServer = createServer(this.app).listen(port);
    this.initializeMiddlewares();
    this.initializeController(controllers);
  }

  private initializeController(controllers: any): void {
    controllers.forEach((element: any) => {
      this.app.use("/", element.router);
    });
  }
  private initializeMiddlewares() {
    this.app.use(cors({ origin: true, credentials: true }));
    this.app.use(express.json());
  }
  public listenn() {
    console.log(`App listening on the port ${this.port}`);
  }
}