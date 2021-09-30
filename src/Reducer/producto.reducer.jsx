import React from 'react'
import { Types } from '../Types/types';

const initialState={
  bandera:null,
  listadoProducto:null
}

export default function(state=initialState,action){

  switch(action.type){

    case Types.productoGuardar:
      return{
        ...state,
        bandera:true
      }
    case Types.productoLista:
      return{
        ...state,
        listadoProducto:action.payload
      }
    case Types.productoError:
      return {
        ...state,
        bandera:false
      }
    case Types.limpiarVaribles:
      return{
        bandera:null,
        listadoProducto:null
      }
  default:
    return state
  }
}