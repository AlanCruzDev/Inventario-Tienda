import App from './app';
import { SERVER_PORT } from './Config/enviroment';
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
],SERVER_PORT);
app.listenn();
