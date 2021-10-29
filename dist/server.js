"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const auth_controller_1 = __importDefault(require("./Controllers/auth.controller"));
const direccion_controller_1 = __importDefault(require("./Controllers/direccion.controller"));
const proveedor_controller_1 = __importDefault(require("./Controllers/proveedor.controller"));
const categoria_controller_1 = __importDefault(require("./Controllers/categoria.controller"));
const productos_controller_1 = __importDefault(require("./Controllers/productos.controller"));
const usuario_controller_1 = __importDefault(require("./Controllers/usuario.controller"));
const ventas_controller_1 = __importDefault(require("./Controllers/ventas.controller"));
const app = new app_1.default([
    new auth_controller_1.default(),
    new direccion_controller_1.default(),
    new proveedor_controller_1.default(),
    new categoria_controller_1.default(),
    new productos_controller_1.default(),
    new usuario_controller_1.default(),
    new ventas_controller_1.default()
], Number(process.env.SERVER_PORT));
app.listenn();
