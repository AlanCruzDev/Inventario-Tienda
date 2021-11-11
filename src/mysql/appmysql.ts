import express from "express";
import cors from "cors";
import http, { createServer } from "http";
import { ServerCOntroller } from '../Interfaces/ServerController';

export default class AppMysql implements ServerCOntroller{

    public app:express.Application;
    public port:number;
    public httpServer:http.Server;

    constructor(controllers:any, port: number){
        this.app=express();
        this.port=port;
        this.httpServer=createServer(this.app).listen(port);
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
        this.app.use(express.urlencoded({extended:true}));
    }
    public listenn() {
        console.log(`Base de datos escucha en el puerto ${this.port}`);
    }
}