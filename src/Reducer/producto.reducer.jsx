import React from 'react'
import { Types } from '../Types/types';

const initialState={
  bandera:null
}

export default function(state=initialState,action){

  switch(action.type){

    case Types.productoGuardar:
      return{
        ...state,
        bandera:true
      }
    case Types.productoError:
      return {
        ...state,
        bandera:false
      }
    case Types.limpiarVaribles:
      return{
        bandera:null
      }
  default:
    return state
  }
}