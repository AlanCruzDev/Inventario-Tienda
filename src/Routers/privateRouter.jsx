import React from 'react';
import {Route,Redirect} from 'react-router-dom';

export const PrivateRouter = ({isAuthen,admin,component:Component,...rest}) => {
  return (
    <Route
      {...rest}
      component ={(props)=>
        (isAuthen && admin === 1) 
        ? (<Component {...props}/>)
        : (<Redirect to='/auth/login'/>) 
      }/>
  )
}
