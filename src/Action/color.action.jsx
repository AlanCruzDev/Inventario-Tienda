import {Types} from '../Types/types';
import clienteAxios from '../Config/axios';

export const NuevoColor=(paleta,idUsuario)=>{
  return async (dispatch)=>{
    // AQUI Guardamos los colores
    let body = {
      colorBarra:paleta.color1,
      colorFuente:paleta.color2,
      fkUser:idUsuario
    }
    try{
      const respuesta=await clienteAxios.post(`/usuario/color/nuevo`,body);
      if(respuesta.data.ok){
       dispatch(BuscarColor(idUsuario));
      }else{
        if(respuesta.data.valor === -1){
          alert('Error al Guardar/Actualizar Color')
        }
        if(respuesta.data.valor === -2){
          // nos regresamos al login
          alert('Error Usuario no Existe');
        }
      }
    }catch(e){
      alert('Error'+e);
    }
  }
}
export const BuscarColor=(idUser)=>{
  return async (dispatch)=>{
    try{
      const respuesta = await clienteAxios.get(`/usuario/color/${idUser}`);
      dispatch(GetColores(respuesta.data.results));
    }catch(e){
      alert(e);
    }
  }
}
const GetColores=(paleta)=>({
  type:Types.getColor,
  payload:paleta
});
export const LimpiarVariables=()=>({
  type:Types.limpiarVaribles
})