"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_Services_1 = __importDefault(require("../Services/auth.Services"));
var authentication_1 = __importDefault(require("../MIddelwares/authentication"));
var AuthController = /** @class */ (function () {
    function AuthController() {
        var _this = this;
        this.path = '/auth';
        this.router = express_1.default.Router();
        this.server = new auth_Services_1.default();
        this.validacion = authentication_1.default;
        this.logeoUser = function (req, res) {
            _this.server.getUser(req, res);
        };
        this.validarToken = function (req, res) {
            _this.server.recuerparUsuario(req, res);
        };
        this.initializeRoutes();
    }
    AuthController.prototype.initializeRoutes = function () {
        this.router.get(this.path + "/renew/:idUser", this.validacion.instanceWEB.isAuth, this.validarToken);
        this.router.get(this.path + "/:usser/:password", this.logeoUser);
    };
    return AuthController;
}());
exports.default = AuthController;
