"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Authentication {
    constructor() {
        this.Algol = "HS512";
        this.isAuth = (req, res, next) => {
            if (req.headers.authorization !== null) {
                let Token = req.headers.authorization;
                let PrivateKey = fs_1.default.readFileSync("./src/security/private.pem", "utf8");
                jsonwebtoken_1.default.verify(Token, PrivateKey, { algorithms: this.Algol }, (error) => {
                    if (error) {
                        res.status(500).json({ error: "Not Authorized" });
                        return false;
                    }
                    return next();
                });
            }
            else {
                res.status(500).json({ error: "Not Authorized" });
                return false;
            }
        };
        this.GenerarToken = () => {
            const PrivateKey = fs_1.default.readFileSync("./src/security/private.pem", "utf8");
            const token = jsonwebtoken_1.default.sign({ body: "stuff" }, PrivateKey, {
                algorithm: this.Algol,
            });
            return token;
        };
    }
    static get instanceWEB() {
        return this.instance || (this.instance = new this());
    }
}
exports.default = Authentication;
