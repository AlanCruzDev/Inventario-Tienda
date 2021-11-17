import {Types} from '../Types/types';

const initialState ={
  color:null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action){

  switch(action.type){
    case Types.newColor:
      return {
        ...state,
        color:[action.payload]
      }
    case Types.getColor:
      return{
        ...state,
        color:action.payload
      }
    case Types.limpiarVaribles:
      return{
        color:null
      }
    default:
      return state;
  }
}