import {Types} from '../Types/types';
const initialState={
    ventas:[]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initialState,action){
    
    switch(action.type){
        case Types.ventasListado:
            return{
                ...state,
                ventas:action.payload
            }
        case Types.limpiarVaribles:
            return{
                ventas:[]
            }
        default:
            return state
    }
}