import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import thunk from 'redux-thunk';
import colorReducer from '../Reducer/color.reducer';
import authReducer from '../Reducer/auth.reducer';
import direccionReducer from '../Reducer/direccion.reducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  color: colorReducer,
  auth:authReducer,
  direccion:direccionReducer
});

export const store=createStore(reducers,
  composeEnhancers(
    applyMiddleware(thunk)
));