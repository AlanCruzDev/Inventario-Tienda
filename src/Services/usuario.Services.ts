import { Request, Response } from "express";
import { mysqlConnection } from "../database/db";
import { queryEmpleadoTienda } from "../Consultas/querys";
import { MysqlError } from "mysql";
import { Usuario } from "../Interfaces/usuario.interface";

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
          return res.status(200).json({
            ok:true
          });
        }
        console.log(error.errno);
        return res.json({
          ok:false,
          error
        });
      }
    );
  };
}
