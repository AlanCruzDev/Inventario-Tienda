import { Types } from "../Types/types";
import clienteAxios from "../Config/axios";
import TokenAuth from "../Config/axios.headers";

export const RegistreUsuario=(body)=>{
  return async (dispatch)=>{
    try{
      const token = JSON.parse(localStorage.getItem('token'));
      TokenAuth(token);
      const respuesta = await clienteAxios.post('/usuario',body);
      console.log(respuesta.data);
      if(respuesta.data.ok === true){
        dispatch(RegistroExitoso());
    }else{
      dispatch(RegistroFracaso());
    }
    }catch(e){
      alert(e);
    }
  }
}

const RegistroExitoso=()=>({
  type:Types.registroUsuario
});
const RegistroFracaso=()=>({
  type:Types.fracasoregistoUsuario
});