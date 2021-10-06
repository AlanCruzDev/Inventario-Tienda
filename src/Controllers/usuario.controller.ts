import express,{Request,Response} from 'express';
import Controller from '../Interfaces/controllers.interfaces';
import Authentication from '../MIddelwares/authentication';
import UsuarioServices from '../Services/usuario.Services';


export default class UsuarioController implements Controller{

  public path='/usuario';
  public router = express.Router();
  public server =  new UsuarioServices();
  public validacion=Authentication;

  constructor(){
    this.initializeRoutes();
  }
  initializeRoutes():void{
    this.router.post(`${this.path}`,this.validacion.instanceWEB.isAuth,this.InsertaUsuario);

  }

  InsertaUsuario=(req:Request,res:Response)=>{
    this.server.InsertarUsuario(req,res);
  }
}