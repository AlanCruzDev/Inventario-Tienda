import express,{Request,Response} from 'express';
import Controller from '../Interfaces/controllers.interfaces';
import Authentication from '../MIddelwares/authentication';
import ProductoService from '../Services/productos.services';

export default class ProductosController implements Controller{

  public path='/productos';
  public router=express.Router();
  public server= new ProductoService();
  public validacion=Authentication;

  constructor(){
    this.initializeRoutes();
  }
  initializeRoutes():void{
    this.router.post(`${this.path}`,this.insertarProducto);
  }

  insertarProducto=(req:Request,res:Response)=>{
    this.server.insertProducto(req,res);
  }
}