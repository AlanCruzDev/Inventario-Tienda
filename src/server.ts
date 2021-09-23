import App from './app';
import { SERVER_PORT } from './Config/enviroment';
import AuthController from './Controllers/auth.controller';
import DireccionController from './Controllers/direccion.controller';
const app = new App([
    new AuthController(),
    new DireccionController()
],SERVER_PORT);
app.listenn();
