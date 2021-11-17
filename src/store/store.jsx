import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import colorReducer from '../Reducer/color.reducer';
import authReducer from '../Reducer/auth.reducer';
import direccionReducer from '../Reducer/direccion.reducer';
import proveedorReducer from '../Reducer/proveedor.reducer';
import categoriaReducer from '../Reducer/categoria.reducer';
import productoReducer from '../Reducer/producto.reducer';
import usuarioReducer from '../Reducer/usuario.reducer';
import carritoReducer from '../Reducer/carrito.reducer';
import ventasReducer from '../Reducer/ventas.Reducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  color: colorReducer,
  auth:authReducer,
  direccion:direccionReducer,
  proveedor:proveedorReducer,
  categorias:categoriaReducer,
  producto:productoReducer,
  usuario:usuarioReducer,
  carrito:carritoReducer,
  ventas:ventasReducer
});

export const store=createStore(reducers,
  composeEnhancers(
    applyMiddleware(thunk)
));