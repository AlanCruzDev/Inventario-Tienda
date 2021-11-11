// servicios de mysql
import { Request, Response } from "express";
import { mysqlConnection } from "../../database/db";
import { querysLogeo } from "../../Consultas/querys";
import { MysqlError } from "mysql";

export default class MysqlServices{

    getUsers =async(req:Request,res:Response)=>{
        try{
            await mysqlConnection.query(querysLogeo.todoUsuerios,
                (error: MysqlError | null, results: any[], fields: any)=>{
                    if(!error){
                        return res.status(200).json({
                            ok:true,
                            results
                        });
                    }else{
                        return res.status(500).json({
                            ok:false,
                            error
                        });
                    }
                });
        }catch(e){
            res.json({
                e
            });
        }

    }
}
