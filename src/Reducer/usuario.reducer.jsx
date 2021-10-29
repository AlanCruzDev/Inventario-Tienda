import { Types } from "../Types/types";

const initialState ={
  registro:null
}
export default function(state=initialState,action){

  switch(action.type){

    case Types.registroUsuario:
      return{
        ...state,
        registro:true
      }
    case Types.fracasoregistoUsuario:
      return{
        ...state,
        registro:false
      }
    case Types.limpiarVaribles:
      return {
        registro:null
      }
    default:
      return state;
  }
}