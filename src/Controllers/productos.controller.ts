import express, { Request, Response } from "express";
import Controller from "../Interfaces/controllers.interfaces";
import Authentication from "../MIddelwares/authentication";
import ProductoService from "../Services/productos.services";

export default class ProductosController implements Controller {
  public path = "/productos";
  public router = express.Router();
  public server = new ProductoService();
  public validacion = Authentication;

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes(): void {
    this.router.post(
      `${this.path}`,
      this.validacion.instanceWEB.isAuth,
      this.insertarProducto
    );
    this.router.get(`${this.path}/listado/:id`, this.listarProductos);
    this.router.get(`${this.path}/:id`, this.ObtenerProducto);
    this.router.put(
      `${this.path}`,
      this.validacion.instanceWEB.isAuth,
      this.ModificarProducto
    );
  }

  insertarProducto = (req: Request, res: Response) => {
    this.server.insertProducto(req, res);
  };
  listarProductos = (req: Request, res: Response) => {
    this.server.ListarProductosTienda(req, res);
  };
  ModificarProducto = (req: Request, res: Response) => {
    this.server.ActualizamosProducto(req, res);
  };
  ObtenerProducto = (req: Request, res: Response) => {
    this.server.ConsultaProducto(req, res);
  };
}
