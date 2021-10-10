"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../database/db");
const authentication_1 = __importDefault(require("../MIddelwares/authentication"));
const querys_1 = require("../Consultas/querys");
class AuthService {
    constructor() {
        this.getUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.params;
            try {
                yield db_1.mysqlConnection.query(querys_1.querysLogeo.busquedaUsuario, [data.usser, null], (error, results, fields) => {
                    try {
                        if (!error) {
                            if ((results[0].contrasena.length > 0 ? results[0].contrasena : "") === data.password) {
                                return res.status(200).json({
                                    ok: true,
                                    results,
                                    token: authentication_1.default.instanceWEB.GenerarToken(),
                                });
                            }
                            else {
                                return res.status(401).json({
                                    ok: false,
                                });
                            }
                        }
                    }
                    catch (e) {
                        return res.status(401).json({
                            ok: false,
                        });
                    }
                });
            }
            catch (e) {
                res.json({ e });
            }
        });
        this.recuerparUsuario = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = req.params;
            try {
                yield db_1.mysqlConnection.query(querys_1.querysLogeo.busquedaUsuario, ["", data.idUser], (error, results, fields) => {
                    if (!error) {
                        if (results.length > 0) {
                            return res.status(200).json({
                                ok: true,
                                results,
                                token: authentication_1.default.instanceWEB.GenerarToken(),
                            });
                        }
                        else {
                            return res.status(401).json({
                                ok: false,
                            });
                        }
                    }
                });
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = AuthService;
