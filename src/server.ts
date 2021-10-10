import App from './app';
import dotenv from "dotenv";
dotenv.config();
import AuthController from './Controllers/auth.controller';
import DireccionController from './Controllers/direccion.controller';
import ProveedorController from './Controllers/proveedor.controller';
import CategoriaController from './Controllers/categoria.controller';
import ProductosController from './Controllers/productos.controller';
import UsuarioController from './Controllers/usuario.controller';

const app = new App([
    new AuthController(),
    new DireccionController(),
    new ProveedorController(),
    new CategoriaController(),
    new ProductosController(),
    new UsuarioController()
],Number (process.env.SERVER_PORT));
app.listenn();
