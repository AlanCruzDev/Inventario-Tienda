import App from './app';
import { SERVER_PORT } from './Config/enviroment';
import AuthController from './Controllers/auth.controller';

const app = new App([
    new AuthController()
],SERVER_PORT);
app.listenn();
