import { Request, Response } from 'express'
import { mysqlConnection } from '../../database/db';
import { queryProductosTIenda, } from '../../Consultas/querys'
import { MysqlError } from 'mysql'
import {parseMysqlPost} from '../../MIddelwares/utilidades';
import {
  ProductoInterface,
  ProductoActualizar,
} from '../../Interfaces/producto.interface'
import {EnviarCodigo} from '../../Socket/socket'

export default class ProductoService {
  insertProducto = (req: Request, res: Response) => {
    const body: ProductoInterface = req.body
    try {
     mysqlConnection.query(
        'call InsertarProducto(?,?,?,?,?,?,?,?,?)',
        [
          body.NombreProducto,
          body.Precio,
          body.CodigoSerie,
          body.Imagen,
          body.fkProveedor,
          body.fkCategoria,
          body.Cantidad,
          body.FechaLllegada,
          body.fkTienda,
        ],
        (error: MysqlError | null, results: any, fields: any) => {
          if (!error) {
            res.json({
              ok: true,
            })
          } else {
            res.json({
              ok: false,
              error
            })
          }
        },
      )
    } catch (e) {
      res.json({
        ok: false,
        e,
      })
    }
  }
  EleminarProducto=async(req:Request,res:Response)=>{
    const {idProducto}=req.params;
    console.log(idProducto);
    try{
      mysqlConnection.query('call EleminarProducto (?)',[idProducto],(error: MysqlError | null, results: any[], fields: any)=>{
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
          })
        }
      });
    }catch(e){
      console.log(e);
    }
  }
  ListarProductosTienda = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      await mysqlConnection.query(
        queryProductosTIenda.obtenerProductos,
        [id],
        (error: MysqlError | null, results: any[], fields: any) => {
          if (!error) {
            res.json({
              ok: true,
              results,
            })
          } else {
            res.json({
              ok: false,
            })
          }
        },
      )
    } catch (e) {
      console.log(e)
      res.json({
        ok: false,
        e,
      })
    }
  }
  ActualizamosProducto = (req: Request, res: Response) => {
    const body: ProductoActualizar = req.body
    try {
     mysqlConnection.query(
        queryProductosTIenda.procedimientoActualizar,
        [
          body._NombreProducto,
          body._Precio,
          body._CodigoSerie,
          body._Imagen,
          body._fkProveedor,
          body._fkCategoria,
          body._Cantidad,
          body._FechaLllegada,
          body._fkTienda,
        ],
        (error: MysqlError | null, results: any, fields: any) => {
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
            res.json({
              ok: false,
            })
          }
        },
      )
    } catch (e) {
      res.json({
        ok: false,
        e,
      })
    }
  }
  ConsultaProducto = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      await mysqlConnection.query(
        queryProductosTIenda.ObtenerProducto,
        [id],
        (error: MysqlError | null, results: any[], fields: any) => {
          if (!error) {
            res.json({
              ok: true,
              results,
            })
          } else {
            res.json({
              ok: false,
            })
          }
        },
      )
    } catch (e) {
      res.json({
        ok: false,
        e,
      })
    }
  }

  BuscarProductoCodigoBarras= async(req:Request,res:Response)=>{
    const {codigo,idtienda}=req.params;
    try{
      await mysqlConnection.query(queryProductosTIenda.ObtenerProductoCodigoTienda,[codigo,Number(idtienda)],(error:MysqlError | null, results:any[],fields:any)=>{
        if(!error){
         EnviarCodigo(results,Number(idtienda));
          return res.json({ok:true});
        }else{
          console.log(error);
          return res.json({ok:false});
        }
      });
    }catch(e){
      res.json({ok:false,e});
    }
  }
}
