import express,{ Request,Response } from 'express';
import Controller from '../../Interfaces/controllers.interfaces';
import Authentication from '../../MIddelwares/authentication';
import MysqlServices from '../ServiceMysql/mysql.services';

export default class MysqlController implements Controller{

    public path='/bd';
    public router=express.Router();
    public server = new MysqlServices();
    public validacion = Authentication;
    
    constructor(){
        this.initializeRoutes();

    }
    initializeRoutes(){
        this.router.get(`${this.path}/usuarios`,this.SacarUsuarios);
    }
    SacarUsuarios=(req:Request,res:Response)=>{
        this.server.getUsers(req,res);
    }
}