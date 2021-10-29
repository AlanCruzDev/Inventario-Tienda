import { Types } from "../Types/types";

const initialState ={
  estados:[],
  municipios:[]
}
export default function(state =initialState,action){
  switch(action.type){
    case Types.estado:
      return{
        ...state,
        estados:action.payload.es
      }
    case Types.municipio:
      return {
        ...state,
        municipios:action.payload.muni
      }
    case Types.municipioLimpiar:
    case Types.estadoLimpiar:
      return {
        estado:[],
        municipios:[]
      }
    default:
      return state;
  }
}