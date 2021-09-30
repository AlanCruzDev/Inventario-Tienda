import e, { Request, Response } from "express";
import { mysqlConnection } from "../database/db";
import { queryCategoria } from "../Consultas/querys";
import { MysqlError } from "mysql";
import {CategoriaInterface} from '../Interfaces/categoria.interface';

export default class CategoriaService{

  insertCategoria=(req:Request,res:Response)=>{
    const body:CategoriaInterface = req.body;
    try{
      mysqlConnection.query('insert into Categoria (NombreCategoria) values (?)',[body.NombreCategoria],
      (error: MysqlError | null, results: any, fields: any) =>{
        if(!error){
          res.status(200).json({
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
        ok:false
      });
    }
  }
  obtenemosCategorias= async (req:Request,res:Response)=>{
    try{
      await mysqlConnection.query(queryCategoria.obtenerCategoria,(error: MysqlError | null, results: any[], fields: any) =>{
        if(!error){
          res.status(200).json({
            ok:true,
            results
          });
        }
      });
    }catch(e){

    }
  }
}