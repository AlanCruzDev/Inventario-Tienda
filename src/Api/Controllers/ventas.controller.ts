import express,{Request,Response} from 'express';
import Controller from '../../Interfaces/controllers.interfaces';
import VentasService from '../Services/ventas.service'; '../Services/ventas.service';
import Authentication from '../../MIddelwares/authentication';

export default class VentasController implements Controller{
  
  public path= '/ventas';
  public router= express.Router();
  public server= new VentasService();
  public validacion= Authentication;

  constructor(){
    this.initializeRoutes();
  }
  initializeRoutes(): void {
    this.router.post(`${this.path}`,this.InsertarVenta);
    this.router.get(`${this.path}/buscar/:fechaInicio/:fechaFinal/:idUsuario/:idTienda`,this.BuscarVenta,this.validacion.instanceWEB.isAuth);
  };
  InsertarVenta=(req:Request,res:Response)=>{
    this.server.InsertaVentas(req,res);
  }
  BuscarVenta=(req:Request,res:Response)=>{
    this.server.BuscarVentaFecha(req,res);
  }
}