"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var Authentication = /** @class */ (function () {
    function Authentication() {
        var _this = this;
        this.Algol = "HS512";
        this.isAuth = function (req, res, next) {
            if (req.headers.authorization !== null) {
                var Token = req.headers.authorization;
                var PrivateKey = fs_1.default.readFileSync("./src/security/private.pem", "utf8");
                jsonwebtoken_1.default.verify(Token, PrivateKey, { algorithms: _this.Algol }, function (error) {
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
        this.GenerarToken = function () {
            var PrivateKey = fs_1.default.readFileSync("./src/security/private.pem", "utf8");
            var token = jsonwebtoken_1.default.sign({ body: "stuff" }, PrivateKey, {
                algorithm: _this.Algol,
            });
            return token;
        };
    }
    Object.defineProperty(Authentication, "instanceWEB", {
        get: function () {
            return this.instance || (this.instance = new this());
        },
        enumerable: true,
        configurable: true
    });
    return Authentication;
}());
exports.default = Authentication;
