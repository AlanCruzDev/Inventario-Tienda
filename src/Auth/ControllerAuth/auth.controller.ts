import express,{Request,Response} from 'express';
import Controller from '../../Interfaces/controllers.interfaces';
import AuthService from '../ServicesAuth/auth.Services';
import Authentication from '../../MIddelwares/authentication';

export default class AuthController implements Controller{

    public path='/auth';
    public router=express.Router();
    public server = new AuthService();
    public validacion = Authentication;
    
    constructor(){
        this.initializeRoutes();
    }
    initializeRoutes():void{
        this.router.get(`${this.path}/renew/:idUser`,this.validacion.instanceWEB.isAuth,this.validarToken);
        this.router.get(`${this.path}/:usser/:password`, this.logeoUser);
    }
    logeoUser=(req:Request,res:Response)=>{
        this.server.getUser(req,res);
    }
    validarToken=(req:Request,res:Response)=>{
        this.server.recuerparUsuario(req,res);
    }
}