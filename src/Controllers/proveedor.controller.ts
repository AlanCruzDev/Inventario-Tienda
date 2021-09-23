import express,{Request,Response} from 'express';
import Controller from '../Interfaces/controllers.interfaces';
import Authentication from '../MIddelwares/authentication';

export default class ProveedorController implements Controller{

  public path='/proveedor';
  public router=express.Router();
  public server:any
  public validacion=Authentication;

  constructor() {
    this.initializeRoutes();
  }
  initializeRoutes():void{
  }
  




}

