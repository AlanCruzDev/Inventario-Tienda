import { Types } from "../Types/types";

const initialState ={
  _carrito:[]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action){

  switch (action.type) {

    case Types.agregarproductocarrito:
      return{
        ...state,
        _carrito:[...state._carrito,action.payload]
      }
    case Types.limpiarCarrito:
      return{
        _carrito:[]
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