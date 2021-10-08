import { Request, Response } from "express";
import { mysqlConnection } from "../database/db";
import { queryEmpleadoTienda } from "../Consultas/querys";
import { MysqlError } from "mysql";
import { Usuario } from "../Interfaces/usuario.interface";
import {parseMysqlPost} from '../MIddelwares/utilidades';

export default class UsuarioServices {
  InsertarUsuario = async (req: Request, res: Response) => {
    const body: Usuario = req.body;
    mysqlConnection.query(
      queryEmpleadoTienda.registroempleado,
      [
        body._Nombre,
        body._Paterno,
        body._Materno,
        body._NombreUser,
        body._contraseña,
        body._horaAcceso,
        body._fkTienda,
      ],
      (error: MysqlError | null, results: [], fields: any) => {
        if(!error){
          /*validamos l insercesion del usuario*/
          if(parseMysqlPost(results) === -1){
            res.json({
              ok: false,
            });
          }else{
            res.json({
              ok: true,
            });
          }
        }
      }
    );
  };
}
