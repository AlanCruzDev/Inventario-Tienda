import express,{Request,Response} from 'express';
import Controller from '../../Interfaces/controllers.interfaces';
import Authentication from '../../MIddelwares/authentication';
import ProveedorService from '../ServicioProducto/proveedor.service';

export default class ProveedorController implements Controller{

  public path='/proveedor';
  public router=express.Router();
  public server= new ProveedorService();
  public validacion=Authentication;

  constructor() {
    this.initializeRoutes();
  }
  
  initializeRoutes():void{
    this.router.post(`${this.path}`,this.GuardarProveedor);
    this.router.get(`${this.path}`,this.getProveedores);
  }
  
  GuardarProveedor=(req:Request,res:Response)=>{
    this.server.insertProveedor(req,res);
  }
  getProveedores=(req:Request,res:Response)=>{
    this.server.obtenerProveedores(req,res);
  }
}

