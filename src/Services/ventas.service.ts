import { Request, Response } from "express";
import { mysqlConnection } from "../database/db";
import { querysLogeo } from "../Consultas/querys";
import { MysqlError } from "mysql";
import { Iventas } from '../Interfaces/IVentas';

export default class VentasService{

  InsertaVentas=async(req:Request,res:Response)=>{
    const data:Iventas=req.body;
    console.log(data);
  }
}