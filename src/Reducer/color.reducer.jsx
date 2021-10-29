import {Types} from '../Types/types';

const initialState ={
  color:null
}

export default function(state=initialState,action){

  switch(action.type){
    case Types.newColor:
      return {
        ...state,
        color:[action.payload]
      }

    default:
      return state;
  }
}