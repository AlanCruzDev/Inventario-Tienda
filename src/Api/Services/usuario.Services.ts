import { Request, Response } from "express";
import { mysqlConnection } from "../../database/db";
import { queryEmpleadoTienda, querysLogeo } from "../../Consultas/querys";
import { MysqlError } from "mysql";
import { Usuario } from "../../Interfaces/usuario.interface";
import { parseMysqlPost } from "../../MIddelwares/utilidades";
import { IColor } from "../../Interfaces/IColores";

export default class UsuarioServices {
  BuscarColorUser = async (req: Request, res: Response) => {
    const { idUser } = req.params;
    try {
      mysqlConnection.query(
        querysLogeo.ObtenercolorUsuario,
        [idUser],
        (error: MysqlError | null, results: [], fields: any) => {
          if(!error){
            return res.status(200).json({
              ok:false,
              results
            });
          }else{
            return res.json({
              ok:false
            });
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
  ObtenerColoresServicio = async (req: Request, res: Response) => {
    const body: IColor = req.body;
    console.log(body);
    try {
      mysqlConnection.query(
        querysLogeo.colorUsuario,
        [body.colorBarra, body.colorFuente, body.fkUser],
        (error: MysqlError | null, results: [], fields: any) => {
          if (!error) {
            if (parseMysqlPost(results) === -1) {
              res.json({
                ok: false,
                message: "Error de Actualizar/Insertar",
              });
            } else {
              res.status(200).json({
                ok: true,
              });
            }
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
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
        if (!error) {
          /*validamos l insercesion del usuario*/
          if (parseMysqlPost(results) === -1) {
            res.json({
              ok: false,
            });
          } else {
            res.json({
              ok: true,
            });
          }
        }
      }
    );
  };
}
