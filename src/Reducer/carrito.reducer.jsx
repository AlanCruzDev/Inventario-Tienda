import { Types } from "../Types/types";

const initialState ={
  _carrito:[]
}
export default function(state=initialState,action){

  switch (action.type) {

    case Types.agregarproductocarrito:
      return{
        ...state,
        _carrito:[...state._carrito,action.payload]
      }
    case Types.limpiarVaribles:
      return{
        _carrito:[]
      }
    case Types.actualizarCarrito:
      return{
        ...state,
        _carrito:state._carrito.map(res =>(
          res.idProducto === action.payload.idProducto ? res=action.payload : res
        ))
      }
    default:
      return state;
  }
}