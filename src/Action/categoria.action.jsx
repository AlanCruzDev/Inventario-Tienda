import { Types } from "../Types/types";
import clienteAxios from "../Config/axios";


export const GetCategoria=()=>{
  return async (dispatch)=>{
    try{
      const respuesta = await clienteAxios.get('/categoria');
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