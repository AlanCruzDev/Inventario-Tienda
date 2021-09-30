import { Request, Response } from "express";
import { mysqlConnection } from "../database/db";
import { queryProductosTIenda } from "../Consultas/querys";
import { MysqlError } from "mysql";
import {ProductoInterface} from '../Interfaces/producto.interface';

export default class ProductoService{

  insertProducto=(req:Request,res:Response)=>{
    const body:ProductoInterface=req.body;
    try{
      mysqlConnection.query('call InsertarProducto(?,?,?,?,?,?,?,?,?)',[body.NombreProducto,body.Precio,body.CodigoSerie,body.Imagen,body.fkProveedor,body.fkCategoria,body.Cantidad,body.FechaLllegada,body.fkTienda],
        (error: MysqlError | null, results: any, fields: any) =>{
          if(!error){
            res.json({
            ok:true
            });
          }else{
            res.json({
            ok:false
          });
        }
      });
    }catch(e){
      res.json({
        ok:false,
        e
      });
    }
  }
  ListarProductosTienda= async(req:Request,res:Response)=>{
    const id=req.params;
    try{
      await mysqlConnection.query(queryProductosTIenda.obtenerProductos,[id],
        (error: MysqlError | null, results: any[], fields: any)=>{
          if(!error){
            res.json({
            ok:true,
            results
            });
          }else{
            res.json({
            ok:false
          });
        }
        });
    }catch(e){
      console.log(e);
      res.json({
        ok:false,
        e
      });
    }
  }

}
