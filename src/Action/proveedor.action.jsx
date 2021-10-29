import { Types } from "../Types/types";
import clienteAxios from "../Config/axios";
import TokenAuth from '../Config/axios.headers';

export const InsertarProveedor=(body)=>{
  return async (dispatch)=>{
    try{
      const token = JSON.parse(localStorage.getItem('token'));
      TokenAuth(token);
      const respuesta = await clienteAxios.post('/proveedor',body);
      if(respuesta.data.ok === true){
          dispatch(ExitoProveedor());
      }else{
        dispatch(FracasoProveedor());
      }
    }catch(e){
      alert(e);
    }
  }
}

export const ListarProveedores=()=>{
  return async (dispatch)=>{
    try{
      const respuesta = await clienteAxios.get('/proveedor');
      dispatch(ExistoListado(respuesta.data.results))
    }catch(e){
      alert(e);
    }
  }
}

const ExitoProveedor=()=>({
  type:Types.proveedorGuardado
});

const FracasoProveedor=()=>({
  type:Types.proveedorExiste
})

export const LimpiarVariable=()=>({
  type:Types.limpiarVaribles
})

const ExistoListado=(data)=>({
  type:Types.proveedorLista,
  payload:data
});