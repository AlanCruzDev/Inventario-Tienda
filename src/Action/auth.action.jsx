import { Types } from "../Types/types";
import clienteAxios from "../Config/axios";
import TokenAuth from '../Config/axios.headers';

export const IniciarSesion=(usser,password)=>{
  return async (dispatch)=>{
    try{
      const respuesta=await clienteAxios.get(`/auth/${usser}/${password}`);
        dispatch(Logeado(respuesta.data));
    }catch(e){
      console.log(e);
    }
  }
}

export const VerificarUser=(idUser,token)=>{
  return async (dispatch)=>{
    try{
      TokenAuth(token);
      const respuesta = await clienteAxios.get(`auth/renew/${idUser}`);
      dispatch(Logeado(respuesta.data));
    }catch(e){
      console.log(e);
    }
  }
}
export const ErrorToken=()=>({
  type:Types.errorToken
})
export const ErroLogeo=()=>({
  type:Types.errorLogeo,
});
const Logeado=(datos)=>({
  type:Types.logeo,
  payload:datos
});