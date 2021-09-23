import express,{Request,Response} from 'express';
import Controller from '../Interfaces/controllers.interfaces';
import Authentication from '../MIddelwares/authentication';
import DireccionService from '../Services/direccion.service';

export default class DireccionController implements Controller{
    public path='/direccion';
    public router=express.Router();
    public server = new DireccionService();
    public validacion = Authentication;
    
    constructor(){
        this.initializeRoutes();
    }
    initializeRoutes():void{
      /*this.router.get(`${this.path}/estados`,this.InsertarEstados);*/
      this.router.get(`${this.path}/municipios/:estado`,this.BuscarMunicipios);
      this.router.get(`${this.path}/estados`,this.ObtenerEstados);
    }
    public BuscarMunicipios=(req:Request,res:Response)=>{
      this.server.BuscarMunicipios(req,res);
    }
    public InsertarEstados=(req:Request,res:Response)=>{
      this.server.InsertarEstados(req,res);
    }
    public ObtenerEstados=(req:Request,res:Response)=>{
      this.server.EncontrarEstados(req,res);
    }

}