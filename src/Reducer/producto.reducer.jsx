import React from 'react'
import { Types } from '../Types/types';

const initialState={
  bandera:null,
  listadoProducto:null,
  productouno:null
}

export default function(state=initialState,action){

  switch(action.type){

    case Types.productoGuardar:
      return{
        ...state,
        bandera:true
      }
    case Types.productoUno:
      return{
        ...state,
        productouno:action.payload
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
        listadoProducto:null,
        producto:null
      }
  default:
    return state
  }
}