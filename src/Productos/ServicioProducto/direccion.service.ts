import {Request,Response} from 'express';
import { mysqlConnection } from '../../database/db';
import {Municipios} from '../../Interfaces/municipios.interface';
import {typos} from '../../Json/datos';

export default class DireccionService{

  InsertarEstados=async (req:Request,res:Response)=>{
    try{
      this.getJsonEstados().map(valor =>{
        mysqlConnection.query('insert into Estado (NombreCiudad) values(?)',[valor]);
      });
    }catch(e){
      console.log(e);
    }
  }
  EncontrarEstados= async(req:Request,res:Response)=>{
    try{
      res.json({es:this.getJsonEstados()});
    }catch(e){
      console.log(e)
    }
  }
  BuscarMunicipios= async(req:Request,res:Response)=>{
    const {estado}=req.params;
    try{
      res.status(200).json({muni:this.getJsonMunicipios(estado)});
    }catch(e){
      console.log(e);
    }
  }
  getJsonMunicipios=(estado:string)=>{
    let array:any;
      typos.forEach((valor:Municipios)=>{
          if(valor.Nombre === estado){
            array = valor.Estado;
          }
      });
    return array;
  }

  getJsonEstados=():[]=>{
    let array:any = [];
      typos.forEach((valor:Municipios)=>{
        array.push(valor.Nombre)
      });
    return array;
  }
}