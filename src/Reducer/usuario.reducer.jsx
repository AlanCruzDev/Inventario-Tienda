import { Types } from "../Types/types";

const initialState ={
  registro:null,
  empleados:null,
  bandera:false
}
export default function(state=initialState,action){

  switch(action.type){

    case Types.registroUsuario:
      return{
        ...state,
        registro:true
      }
    case Types.obtenerEmpleados:
      return{
        ...state,
        empleados:action.payload
      }
    case Types.limpiarArreglo:
      return {
        empleados:null
      }
    case Types.fracasoregistoUsuario:
      return{
        ...state,
        registro:false
      }
    case Types.limpiarVaribles:
      return {
        registro:null,
        empleados:null
      }
    default:
      return state;
  }
}