import AppAuth from "./appAuth";
import dotenv from "dotenv";
dotenv.config();
import AuthController from './ControllerAuth/auth.controller';

const appAuth=new AppAuth([
    new AuthController()
],Number(process.env.SERVER_PORT_Auth));
appAuth.listenn();