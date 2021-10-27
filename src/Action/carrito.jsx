import { Types } from "../Types/types";
import clienteAxios from "../Config/axios";
import TokenAuth from '../Config/axios.headers';


export const CarritoCompras=(nombreProducto,idProducto,cantidad,precioTotal)=>{
  return (dispatch)=>{
    const body={nombreProducto,idProducto,cantidad,precioTotal}
    dispatch(AgregarCarrito(body));
  }
}

const AgregarCarrito=(data)=>({
  type:Types.agregarproductocarrito,
  payload:data
});

export const LimpiarVariables=()=>({
  type:Types.limpiarVaribles
});

export const ActualizarCarrito=(data)=>({
  type:Types.actualizarCarrito,
  payload:data
});