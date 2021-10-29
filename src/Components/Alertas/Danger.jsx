import React from "react";
import swal from 'sweetalert';
import {useDispatch} from 'react-redux';
import {LimpiarVariable} from '../../Action/proveedor.action';

export const Danger = ({ titulo, mensaje }) => {

  const dispatch=useDispatch();

  const MostrarAlerta=()=>{
    swal({
      title: {titulo}.titulo,
      text: {mensaje}.mensaje,
      icon: "error",
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
