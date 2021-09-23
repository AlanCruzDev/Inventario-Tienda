"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_Services_1 = __importDefault(require("../Services/auth.Services"));
const authentication_1 = __importDefault(require("../MIddelwares/authentication"));
class AuthController {
    constructor() {
        this.path = '/auth';
        this.router = express_1.default.Router();
        this.server = new auth_Services_1.default();
        this.validacion = authentication_1.default;
        this.logeoUser = (req, res) => {
            this.server.getUser(req, res);
        };
        this.validarToken = (req, res) => {
            this.server.recuerparUsuario(req, res);
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}/renew/:idUser`, this.validacion.instanceWEB.isAuth, this.validarToken);
        this.router.get(`${this.path}/:usser/:password`, this.logeoUser);
    }
}
exports.default = AuthController;
