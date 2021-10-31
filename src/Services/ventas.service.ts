import { Request, Response } from "express";
import { mysqlConnection } from "../database/db";
import { queryVentas } from "../Consultas/querys";
import { MysqlError } from "mysql";
import { Iventas } from "../Interfaces/IVentas";
import { parseMysqlPost } from "../MIddelwares/utilidades";

export default class VentasService {
  InsertaVentas = async (req: Request, res: Response) => {
    const data: Iventas = req.body;
    try {
      mysqlConnection.query(
        queryVentas.ventaRealizada,
        [
          data._MontoFinal,
          data._fechaVenta,
          data._Cantidad,
          data._fkProducto,
          data._fkCliente,
          data._fkTienda,
        ],
        (error: MysqlError | null, results: any, fields: any) => {
          if (!error) {
            if (parseMysqlPost(results) === -1) {
              res.json({
                ok: false,
              });
            } else {
              res.json({
                ok: true,
              });
            }
          } else {
            console.log(error);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  };
}
