import { Request, Response } from "express";
import { mysqlConnection } from "../database/db";
import Authentication from "../MIddelwares/authentication";
import { querysLogeo } from "../Consultas/querys";
import { MysqlError } from "mysql";

export default class AuthService {
  getUser = async (req: Request, res: Response) => {
    const data = req.params;
    try {
      await mysqlConnection.query(
        querysLogeo.busquedaUsuario,
        [data.usser, null],
        (error: MysqlError | null, results: any[], fields: any) => {
          if (!error) {
            if (
              (results[0].contraseña.length > 0
                ? results[0].contraseña
                : "") === data.password
            ) {
              return res.status(200).json({
                ok: true,
                results,
                token: Authentication.instanceWEB.GenerarToken(),
              });
            } else {
              return res.status(401).json({
                ok: false,
              });
            }
          }
        }
      );
    } catch (e) {
      res.json({ e });
    }
  };
  recuerparUsuario = async (req: Request, res: Response) => {
    const data = req.params;
    try {
      await mysqlConnection.query(
        querysLogeo.busquedaUsuario,
        ["", data.idUser],
        (error: MysqlError | null, results: any[], fields: any) => {
          if (!error) {
            if (results.length > 0) {
              return res.status(200).json({
                ok: true,
                results,
                token: Authentication.instanceWEB.GenerarToken(),
              });
            } else {
              return res.status(401).json({
                ok: false,
              });
            }
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
}
