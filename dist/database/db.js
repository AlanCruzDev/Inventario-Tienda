"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mysqlConnection = void 0;
const mysql_1 = __importDefault(require("mysql"));
exports.mysqlConnection = mysql_1.default.createPool({
    host: 'localhost',
    user: process.env.acceso,
    password: process.env.contraseña,
    database: process.env.bd,
    dateStrings: true,
    multipleStatements: true
});
exports.mysqlConnection.getConnection((err, connection) => {
    if (err) {
        if (err.name === 'PROTOCOL_CONNECTION_LOST') {
            console.log('DATABASE SE CERRO');
        }
        if (err.name === 'ER_CON_COUNT_ERROR') {
            console.log('DATABASE HAS TO MANY CONECTIONS');
        }
        if (err.name === 'ECONNREFUSED') {
            console.log('DATABASE CONNECTION WAS REFUSED');
        }
    }
    if (connection)
        connection.release();
    console.log('BD IS CONNECTED');
    return;
});
