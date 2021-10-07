import React from 'react';
import {Route,Redirect} from 'react-router-dom';

export const PrivateRouterEmpleado = ({isAuthen,empleado,component:Component,...rest}) => {
  return (
    <Route
      {...rest}
      component ={(props)=>
        (isAuthen && empleado ===1) 
        ? (<Component {...props}/>)
        : (<Redirect to='/auth/login'/>) 
      }/>
  )
}
