import express,{Request,Response} from 'express';
import Controller from '../../Interfaces/controllers.interfaces';
import Authentication from '../../MIddelwares/authentication';
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
    this.router.patch(`${this.path}/:idUsuario/:idTienda`,this.DesactivaUsuario);
    this.router.patch(`${this.path}/activar/:idUsuario/:idTienda`,this.ActivaUsuario);
    this.router.post(`${this.path}`,this.validacion.instanceWEB.isAuth,this.InsertaUsuario);
    this.router.post(`${this.path}/color/nuevo`,this.ColoresInsertar);
    this.router.get(`${this.path}/color/:idUser`,this.ColorUsuario);
    this.router.get(`${this.path}/lista/:idTienda`,this.SacaUsuarios);
    this.router.get(`${this.path}/recuperar/:idTienda`,this.RecuperarContrasena);
  }
  RecuperarContrasena=(req:Request,res:Response)=>{
    this.server.EnviarCorreo(req,res);
  }
  DesactivaUsuario=(req:Request,res:Response)=>{
    this.server.DesactivarUsuario(req,res);
  }
  ActivaUsuario=(req:Request,res:Response)=>{
    this.server.ActivarUsuario(req,res);
  }
  SacaUsuarios=(req:Request,res:Response)=>{
    this.server.SacarUsuarios(req,res);
  }
  ColoresInsertar=(req:Request,res:Response)=>{
   this.server.InsertarColoresServicio(req,res);
  }
  ColorUsuario=(req:Request,res:Response)=>{
    this.server.BuscarColorUser(req,res);
  }
  InsertaUsuario=(req:Request,res:Response)=>{
    this.server.InsertarUsuario(req,res);
  }
}