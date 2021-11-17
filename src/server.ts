import App from './app';
import dotenv from "dotenv";
dotenv.config();
import UsuarioController from './Api/Controllers/usuario.controller';
import VentasController from './Api/Controllers/ventas.controller';

const  app =new App([
    new VentasController(),
    new UsuarioController()
],Number (process.env.SERVER_PORT));
app.listenn(); 
