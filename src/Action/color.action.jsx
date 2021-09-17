import {Types} from '../Types/types';

export const NuevoColor=(paleta)=>{
  return (dispatch)=>{
    dispatch(ActualizarColores(paleta));
  }
}
const ActualizarColores=(paleta)=>({
  type:Types.newColor,
  payload:paleta
});