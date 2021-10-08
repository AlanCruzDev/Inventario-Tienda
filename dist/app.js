"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
class App {
    constructor(controllers, port) {
        this.app = (0, express_1.default)();
        this.port = port;
        this.httpServer = (0, http_1.createServer)(this.app).listen(port);
        this.initializeMiddlewares();
        this.initializeController(controllers);
    }
    initializeController(controllers) {
        controllers.forEach((element) => {
            this.app.use("/", element.router);
        });
    }
    initializeMiddlewares() {
        this.app.use((0, cors_1.default)({ origin: true, credentials: true }));
        this.app.use(express_1.default.json());
    }
    listenn() {
        console.log(`App listening on the port ${this.port}`);
    }
}
exports.default = App;
