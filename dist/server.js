"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const usuario_controller_1 = __importDefault(require("./Api/Controllers/usuario.controller"));
const ventas_controller_1 = __importDefault(require("./Api/Controllers/ventas.controller"));
const app = new app_1.default([
    new ventas_controller_1.default(),
    new usuario_controller_1.default()
], Number(process.env.SERVER_PORT));
app.listenn();
