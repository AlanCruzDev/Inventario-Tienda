import { Request, Response } from "express";
import { mysqlConnection } from "../../database/db";
import { queryEmpleadoTienda, querysLogeo } from "../../Consultas/querys";
import { MysqlError } from "mysql";
import { Usuario } from '../../Interfaces/usuario.interface';
import { IUsuario } from '../../Interfaces/IUsuario';
import { parseMysqlPost } from "../../MIddelwares/utilidades";
import { IColor } from "../../Interfaces/IColores";
import EmailService from '../email/email.config';
import Authentication from "../../MIddelwares/authentication";

export default class UsuarioServices {

  SacarUsuarios= async(req:Request, res:Response)=>{
    const {idTienda}=req.params;
    try{
      mysqlConnection.query(queryEmpleadoTienda.obtenerUsuarios,[idTienda],(error: MysqlError | null, results: [], fields: any) =>{
        if(!error){
          return res.status(200).json({
            ok:true,
            results
          });
        }
        else{
          return res.json({
            ok:false
          });
        }
      });
    }catch(e){
      console.log(e)
    }
  }
  DesactivarUsuario=(req:Request,res:Response)=>{
    const {idUsuario,idTienda}=req.params;
    try{
      mysqlConnection.query(queryEmpleadoTienda.desactivarUsuario,[idUsuario,idTienda],(error: MysqlError | null, results: any, fields: any)=>{
        if(!error){
          return res.status(200).json({
            ok:true
          });
        }else{
          return res.status(400).json({
            ok:false
          });
        }
      });
    }catch(e){
      console.log(e);
    }
  }
  ActivarUsuario=(req:Request,res:Response)=>{
    const {idUsuario,idTienda}=req.params;
    try{
      mysqlConnection.query(queryEmpleadoTienda.activarUsuario,[idUsuario,idTienda],(error: MysqlError | null, results: any, fields: any)=>{
        if(!error){
          return res.status(200).json({
            ok:true
          });
        }else{
          return res.status(400).json({
            ok:false
          });
        }
      });
    }catch(e){
      console.log(e);
    }

  }
  EnviarCorreo=(req:Request,res:Response)=>{
    const {idTienda}=req.params;
    try{
      mysqlConnection.query(queryEmpleadoTienda.obtenerCorreo,[idTienda],(error: MysqlError | null, results: IUsuario[], fields: any)=>{
        if(!error){
          if(results[0].correo !== null){
            EmailService.instanceEmail.sendMail(
              "Tienda",
              results[0].correo,
              "Codigo de Verificacion",
              "Tienda App",
              results[0].nombreTienda,
              Authentication.instanceWEB.GenerarToken(),
              "Atencion Cliente"
            ); 
            return res.status(200).json({
              ok:true
            });
          }
        }else{
          return res.status(500).json({
            ok:false
          });
        }
      });
    }catch(e){
      console.log(e);
    }
  }
  
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
  
  InsertarColoresServicio = async (req: Request, res: Response) => {
    const body: IColor = req.body;
    try {
      mysqlConnection.query(
        querysLogeo.colorUsuario,
        [body.colorBarra, body.colorFuente, body.fkUser],
        (error: MysqlError | null, results: [], fields: any) => {
          if (!error) {
            if (parseMysqlPost(results) === -1) {
              res.json({
                ok: false,
                valor:-1
              });
            }
            if(parseMysqlPost(results) === -2){
              res.status(400).json({
                ok:false,
                valor:-2
              });
            } 
            else {
              res.status(200).json({
                ok: true,
              });
            }
          }else{
            console.log(error);
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
