import { Types } from "../Types/types";
const initialState ={
  bandera:null,
  proveedorList:null
}

export default function(state =initialState, action){

  switch(action.type){
    case Types.proveedorGuardado:
      return {
        ...state,
        bandera:true
      }
    case Types.proveedorExiste:
      return{
        ...state,
        bandera:false
      }
    case Types.proveedorLista:
      return {
        ...state,
        proveedorList:action.payload
      }
    case Types.limpiarVaribles:
      return{
        bandera:null,
        proveedor:null
      }
    default:
      return state;
  }

}