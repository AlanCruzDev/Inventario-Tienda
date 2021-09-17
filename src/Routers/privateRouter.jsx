import React from 'react';
import {Route,Redirect} from 'react-router-dom';

export const PrivateRouter = ({isAuthen,component:Component,...rest}) => {
  return (
    <Route
      {...rest}
      component ={(props)=>
        (isAuthen) 
        ? (<Component {...props}/>)
        : (<Redirect to='/auth/login'/>) 
      }/>
  )
}
