import {Types} from '../Types/types';

const initialState = {
  logeado:null,
  dateUser:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action){

  switch(action.type){
    case Types.logeo:
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      localStorage.setItem('0',JSON.stringify(action.payload.results[0].idUsuario))
      return{
        ...state,
        logeado:true,
        dateUser:[action.payload]
      }
    case Types.errorLogeo:
    case Types.errorToken:
      localStorage.removeItem('token');
      localStorage.removeItem('0');
      return {
        ...state,
        logeado:false,
        user:[]
      }
    default:
      return state;
  }
}