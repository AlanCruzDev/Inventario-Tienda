import { Types } from "../Types/types";
import clienteAxios from "../Config/axios";
import TokenAuth from '../Config/axios.headers';


export const CarritoCompras=(nombreProducto,idProducto,cantidad,precioTotal)=>{
  return (dispatch)=>{
    const body={nombreProducto,idProducto,cantidad,precioTotal}
    dispatch(AgregarCarrito(body));
  }
}
export const RealizarCompra=(
  _MontoFinal,
  _fechaVenta,
  _Cantidad,
  _fkProducto,
  _fkCliente,
  _fkTienda,
)=>{
  return async (dispatch)=>{
    const body ={_MontoFinal,
      _fechaVenta,
      _Cantidad,
      _fkProducto,
      _fkCliente,
      _fkTienda}
    try{
      const respuesta = await clienteAxios.post(`/ventas`,body);
      if(respuesta.data.ok){
        alert('Compra realizada COrrectamente');
        dispatch(limpiaCarrito());
      }
    }catch(e){
      alert(e);
    }
  }
}
const limpiaCarrito=()=>({
  type:Types.limpiarCarrito
});
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