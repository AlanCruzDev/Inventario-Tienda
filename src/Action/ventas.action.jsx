import {Types} from '../Types/types';
import clienteAxios from '../Config/axios';
import TokenVentas from '../Config/axiosHeaders.ventas';

export const ObtenerVentasFinalizadas=(fechaInicio,fechaTermino,idUsuario,IdTienda)=>{
    return async (dispatch)=>{
        try{
            const token = JSON.parse(localStorage.getItem('token'));
            TokenVentas(token);
            const respuesta= await clienteAxios.get(`/ventas/buscar/${fechaInicio}/${fechaTermino}/${idUsuario}/${IdTienda}`);
            dispatch(RescatarVentasFinalizadas(respuesta.data.results));

        }catch(e){
            console.log(e);
        }
    }
}
const RescatarVentasFinalizadas=(body)=>({
    type:Types.ventasListado,
    payload:body
});
export const LimpiarVentas=()=>({
    type:Types.limpiarVaribles
});