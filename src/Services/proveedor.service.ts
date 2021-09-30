import { Request, Response } from "express";
import { mysqlConnection } from "../database/db";
import { queryProveedor } from "../Consultas/querys";
import { MysqlError } from "mysql";
import {ProveedorInterface} from '../Interfaces/proveedor.interface';

export default class ProveedorService{

  insertProveedor=(req: Request, res: Response)=>{
    const body:ProveedorInterface = req.body;
    try{
      mysqlConnection.query('call InsertatProveedor (?,?,?,?,?,?,?,?)',[body.Cuit,body.NombreProveedor,body.Telefono,body.NombreDelegacion,body.Colonia,body.Calle,body.cp,body.NombreCiudad],
      (error: MysqlError | null, results: any, fields: any) =>{
        if(!error){
          res.json({
            ok:true
          })
        }else{
          res.json({
            ok:false
          });
        }
      });
    }catch(e){
      res.json({
        ok:false
      });
    }
  }
  obtenerProveedores= async(req:Request,res:Response)=>{
    try{

      await mysqlConnection.query(queryProveedor.obtenerProveedor,
        (error:MysqlError | null,results:any[],fields:any)=>{
          if(!error){
            res.json({
              ok:true,
              results
            })
          }else{
            res.json({
              ok:false
            });
          }
        });
    }catch(e){
      res.json({
        ok:false
      });
    }

  }
}