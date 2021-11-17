import { Types } from "../Types/types";
import clienteAxiosProductos from "../Config/axiosProductos";
import TokenHeaderProducto from "../Config/axiosHeaderProductos";

export const InsertarProducto=(data)=>{
  return async (dispatch)=>{
    try{
      const token = JSON.parse(localStorage.getItem('token'));
      TokenHeaderProducto(token);
      const respuesta = await clienteAxiosProductos.post('/productos',data);
      if(respuesta.data.ok === true){
        dispatch(ExsitoGuardarProducto());
      }else{
        dispatch(ErrorGuardarProducto());
      }
    }catch(e){
      alert(e);
    }
  }
}
export const ListarProductos=(id)=>{
  return async (dispatch)=>{
    try{
        const token = JSON.parse(localStorage.getItem('token'));
        TokenHeaderProducto(token);
        const respuesta = await clienteAxiosProductos.get(`/productos/listado/${id}`);
        dispatch(ExistoListado(respuesta.data));
    }
    catch(e){
      alert(e);
    }
  }
}
export const ObtenerProducto=(id)=>{
  return async (dispatch)=>{
    try{
      const token = JSON.parse(localStorage.getItem('token'));
      TokenHeaderProducto(token);
      const respuesta = await clienteAxiosProductos.get(`/productos/${id}`);
      if(respuesta.data.ok === true){
        dispatch(ObtenerUnoProducto(respuesta.data));
      }else{
        dispatch(ErrorGuardarProducto());
      }
    }catch(e){
      alert(e);
    }
  }
}
export const ActualizarProducto=(data)=>{
  return async (dispatch)=>{
    try{
      const token = JSON.parse(localStorage.getItem('token'));
      TokenHeaderProducto(token);
      const respuesta = await clienteAxiosProductos.put('/productos',data);
      if(respuesta.data.ok === true){
        dispatch(ExsitoGuardarProducto());
      }else{
        dispatch(ErrorGuardarProducto());
      }
    }catch(e){
      alert(e);
    }
  }
}

const ExistoListado=(data)=>({
  type:Types.productoLista,
  payload:data

});

const ExsitoGuardarProducto=(data)=>({
  type:Types.productoGuardar,
  payload:data
});

const ErrorGuardarProducto=()=>({
  type:Types.productoError
});
export const LimpiarVariables=()=>({
  type:Types.limpiarVaribles
});

const ObtenerUnoProducto=(data)=>({
  type:Types.productoUno,
  payload:data
});