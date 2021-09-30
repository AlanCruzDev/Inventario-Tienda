import express,{Request,Response} from 'express';
import Controller from '../Interfaces/controllers.interfaces';
import Authentication from '../MIddelwares/authentication';
import CategoriaService from '../Services/categoria.service';

export default class CategoriaController implements Controller{

  public path='/categoria';
  public router = express.Router();
  public server = new CategoriaService();
  public validacion=Authentication;

  constructor(){
    this.initializeRoutes();
  }
  initializeRoutes():void{
    this.router.post(`${this.path}`,this.validacion.instanceWEB.isAuth,this.GuardarCategoria);
    this.router.get(`${this.path}`,this.getCategorias);
  }
  GuardarCategoria=(req:Request,res:Response)=>{
    this.server.insertCategoria(req,res);
  }
  getCategorias =(req:Request,res:Response) =>{
    this.server.obtenemosCategorias(req,res);
  }
}