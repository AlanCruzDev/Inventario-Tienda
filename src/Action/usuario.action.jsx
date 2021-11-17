import { Types } from "../Types/types";
import clienteAxios from "../Config/axios";

export const RegistreUsuario=(body)=>{
  return async (dispatch)=>{
    try{
      const respuesta = await clienteAxios.post('/usuario',body);
      if(respuesta.data.ok === true){
        dispatch(RegistroExitoso());
    }else{
      dispatch(RegistroFracaso());
    }
    }catch(e){
      alert(e);
    }
  }
}
export const SacaEmpleados=(idTienda)=>{
  return async (dispatch)=>{
    try{
      const respuesta= await clienteAxios.get(`/usuario/lista/${idTienda}`);
      if(respuesta.data.ok){
        dispatch(AgregarEmpleados(respuesta.data.results))
      }
    }catch(e){
      alert(e)
    }
  }
}
export const DesactivaEmpleado=(idUsuario,idTienda)=>{
  return async(dispatch)=>{
    try{
      const respuesta = await clienteAxios.patch(`/usuario/${idUsuario}/${idTienda}`);
      if(respuesta.data.ok){
        alert('Desactivado Correctamente');
        dispatch(LimpiarArreglo());
        dispatch(SacaEmpleados(idTienda));
      }else{
        alert('Usuario no Desactivado');
      }
    }catch(e){
      alert(e)
    }
  }
}
export const EnviarEmail=(idTienda)=>{
  return async(dispatch)=>{
    try{
      const respuesta=await clienteAxios.get(`/usuario/recuperar/${idTienda}`);
      if(respuesta.data.ok){
        alert('Correo enviado');

      }
    }catch(e){

    }
  }
}
export const ActivarEmpleado=(idUsuario,idTienda)=>{
  return async(dispatch)=>{
    try{
      const respuesta = await clienteAxios.patch(`/usuario/activar/${idUsuario}/${idTienda}`);
      if(respuesta.data.ok){
        alert('Activado Correctamente');
        dispatch(LimpiarArreglo());
        dispatch(SacaEmpleados(idTienda));
      }else{
        alert('Usuario no Activado');
      }
    }catch(e){
      alert(e)
    }
  }
}
const AgregarEmpleados=(data)=>({
  type:Types.obtenerEmpleados,
  payload:data
});
const LimpiarArreglo=()=>({
  type:Types.limpiarArreglo
});
const RegistroExitoso=()=>({
  type:Types.registroUsuario
});
const RegistroFracaso=()=>({
  type:Types.fracasoregistoUsuario
});