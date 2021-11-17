import { Types } from "../Types/types";
import clienteAxiosProductos from "../Config/axiosProductos";


export const GetCategoria=()=>{
  return async (dispatch)=>{
    try{
      const respuesta = await clienteAxiosProductos.get('/categoria');
      dispatch(ExistoCategorias(respuesta.data.results))
    }catch(e){
      alert(e);
    }
  }
}
const ExistoCategorias=(categoria)=>({
  type:Types.categoriaObtener,
  payload:categoria
})

const LimpiarVariable=()=>({
  type:Types.limpiarVaribles
})