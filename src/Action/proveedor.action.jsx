import { Types } from "../Types/types";
import clienteAxiosProductos from "../Config/axiosProductos";
import TokenHeaderProducto from '../Config/axiosHeaderProductos';

export const InsertarProveedor=(body)=>{
  
  return async (dispatch)=>{
    try{
      const token = JSON.parse(localStorage.getItem('token'));
      TokenHeaderProducto(token);
      const respuesta = await clienteAxiosProductos.post('/proveedor',body);
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
      const token = JSON.parse(localStorage.getItem('token'));
      TokenHeaderProducto(token);
      const respuesta = await clienteAxiosProductos.get('/proveedor');
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