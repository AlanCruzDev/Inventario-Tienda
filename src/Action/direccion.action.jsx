import clienteAxios from '../Config/axios';
import {Types} from '../Types/types';

export const ObtenerEstados=()=>{
  return async (dispatch)=>{
    try{
      const respuesta = await clienteAxios.get('/direccion/estados');
      dispatch(EstadosObteniendo(respuesta.data));
    }catch(e){
      console.log(e);
    }
  }
}
export const ObtenerMunicipios=(municipio)=>{
  return async (dispatch)=>{
    try{
      const respuesta = await clienteAxios.get(`/direccion/municipios/${municipio}`);
      dispatch(MunicipioObtener(respuesta.data));
    }catch(e){
      console.log(e);

    }
  }
}

const EstadosObteniendo=(estados)=>({
  type:Types.estado,
  payload:estados
});

export const LimpiarEstado=()=>({
  type:Types.estadoLimpiar
});

export const MunicipioObtener=(municipios)=>({
  type:Types.municipio,
  payload:municipios
})
