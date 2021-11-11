import AppProductos from "./approductos";
import dotenv from 'dotenv';
dotenv.config();

import DireccionController from './ControllerProducto/direccion.controller';
import ProveedorController from './ControllerProducto/proveedor.controller';
import CategoriaController from './ControllerProducto/categoria.controller';
import ProductosController from './ControllerProducto/productos.controller';

const appProducto= new AppProductos([
    new DireccionController(),
    new ProveedorController(),
    new CategoriaController(),
    new ProductosController()
],Number(process.env.SERVER_PORT_PRODUCTOS));

appProducto.listenn();