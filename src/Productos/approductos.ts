import express from 'express';
import cors from 'cors';
import http,{createServer} from 'http';
import {Server} from 'socket.io';
import {crearSocketServidor} from '../Socket/socket';
import { ServerCOntroller } from '../Interfaces/ServerController';

export default class AppProductos implements ServerCOntroller{
    
    public app: express.Application;
    public port: number;
    public io: Server;
    public httpServer: http.Server;

    constructor(controllers:any, port:number){
        this.app = express();
        this.port = port;
        this.httpServer = createServer(this.app).listen(port);
        this.io= new Server(this.httpServer);
        this.configSocket();
        this.initializeMiddlewares();
        this.initializeController(controllers);
    }
    private configSocket(){
        crearSocketServidor(this.io);
    }
    private initializeController(controllers: any): void {
        controllers.forEach((element: any) => {
          this.app.use("/", element.router);
        });
    }
    private initializeMiddlewares() {
        this.app.use(cors({ origin: true, credentials: true }));
        this.app.use(express.json({limit:'50mb'}));
        this.app.use(express.urlencoded({extended:true}));
    }
    public listenn() {
        console.log(`Product listening on the port ${this.port}`);
    }
}