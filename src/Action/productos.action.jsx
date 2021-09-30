import { Types } from "../Types/types";
import clienteAxios from "../Config/axios";

export const InsertarProducto=(data)=>{
  return async (dispatch)=>{
    try{
      const respuesta = await clienteAxios.post('/productos',data);
      console.log(respuesta.data);
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
const ExsitoGuardarProducto=(data)=>({
  type:Types.productoGuardar,
  payload:data
});

const ErrorGuardarProducto=()=>({
  type:Types.productoError
});
export const LimpiarVariables=()=>({
  type:Types.limpiarVaribles
})