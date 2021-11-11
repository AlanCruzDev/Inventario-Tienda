import AppMysql from './appmysql';
import dotenv from "dotenv";
dotenv.config();
import MysqlController from './ControllerMysql/mysql.controller';
const appmysql = new AppMysql([
    new MysqlController()
    ],Number(process.env.SERVER_PORT_MYSQL));
appmysql.listenn();