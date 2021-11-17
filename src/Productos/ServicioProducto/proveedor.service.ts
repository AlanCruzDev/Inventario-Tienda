import { json, Request, Response } from "express";
import { mysqlConnection } from "../../database/db";
import { queryProveedor } from "../../Consultas/querys";
import { MysqlError } from "mysql";
import { ProveedorInterface } from "../../Interfaces/proveedor.interface";
import {parseMysqlPost} from '../../MIddelwares/utilidades';

export default class ProveedorService {
  insertProveedor = (req: Request, res: Response) => {
    const body: ProveedorInterface = req.body;
    try {
      mysqlConnection.query(
        "call InsertatProveedor (?,?,?,?,?,?,?,?)",
        [
          body.Cuit,
          body.NombreProveedor,
          body.Telefono,
          body.NombreDelegacion,
          body.Colonia,
          body.Calle,
          body.cp,
          body.NombreCiudad,
        ],
        (error: MysqlError | null, results: Object[][], fields: any) => {
          if (!error) {
            if(parseMysqlPost(results) === -1){
              res.json({
                ok: false,
              });
            }else{
              res.json({
                ok: true,
              });
            }
          } else {
            console.log(error);
            res.json({
              ok: false,
            });
          }
        }
      );
    } catch (e) {
      res.json({
        ok: false,
        e,
      });
    }
  };
  obtenerProveedores = async (req: Request, res: Response) => {
    try {
      await mysqlConnection.query(
        queryProveedor.obtenerProveedor,
        (error: MysqlError | null, results: any[], fields: any) => {
          if (!error) {
            res.json({
              ok: true,
              results,
            });
          } else {
            res.json({
              ok: false,
            });
          }
        }
      );
    } catch (e) {
      res.json({
        ok: false,
      });
    }
  };
}
