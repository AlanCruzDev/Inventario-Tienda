import React from "react";
import swal from 'sweetalert';
import {useDispatch} from 'react-redux';
import {LimpiarVariable} from '../../Action/proveedor.action';

export const Success = ({titulo,mensaje}) => {

  const MostrarAlerta=()=>{
    const dispatch=useDispatch();

    swal({
      title: {titulo}.titulo,
      text: {mensaje}.mensaje,
      icon: "success",
      button: "Aceptar",
    }).then((value)=>{
      dispatch(LimpiarVariable());
    });
  }
  return (
    <>
    {MostrarAlerta()}
    </>
  );
};
