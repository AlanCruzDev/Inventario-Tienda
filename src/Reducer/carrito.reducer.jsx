import { Types } from "../Types/types";

const initialState ={
  carrito:[]
}
export default function(state=initialState,action){

  switch (action.type) {

    case Types.agregarproductocarrito:
      return{
        ...state,
        carrito:[...state.carrito,action.payload]
      }
    default:
      return state;
  }
}