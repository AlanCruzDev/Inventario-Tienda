import React from 'react';
import {Success} from '../Components/Alertas/Success';
import {Danger} from '../Components/Alertas/Danger';


export const MensajeAlerta=(bandera,mensaje1,mensaje2,errorMensaje)=>{
  if(bandera !== null && bandera === true){
    return <Success
      titulo={mensaje1}
      mensaje={mensaje2}
    />
  }
  if(bandera !== null && bandera === false){
    return <Danger
      titulo='Error'
      mensaje={errorMensaje}
    />
  }
}