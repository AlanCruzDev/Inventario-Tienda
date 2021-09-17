"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var http_1 = require("http");
var App = /** @class */ (function () {
    function App(controllers, port) {
        this.app = express_1.default();
        this.port = port;
        this.httpServer = http_1.createServer(this.app).listen(port);
        this.initializeMiddlewares();
        this.initializeController(controllers);
    }
    App.prototype.initializeController = function (controllers) {
        var _this = this;
        controllers.forEach(function (element) {
            _this.app.use("/", element.router);
        });
    };
    App.prototype.initializeMiddlewares = function () {
        this.app.use(cors_1.default({ origin: true, credentials: true }));
        this.app.use(express_1.default.json());
    };
    App.prototype.listenn = function () {
        console.log("App listening on the port " + this.port);
    };
    return App;
}());
exports.default = App;
