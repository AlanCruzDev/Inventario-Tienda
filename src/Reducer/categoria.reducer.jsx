import React from 'react'
import { Types } from '../Types/types';

const initialState ={
  categoria:[]
}

export default function(state=initialState,action){

  switch(action.type){

    case Types.categoriaObtener:
      return {
        categoria:action.payload
      }
    case Types.limpiarVaribles:
      return{
        categoria:null
      }
    default:
      return state;
  }

}