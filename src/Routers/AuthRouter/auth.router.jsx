import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {Login} from '../../Auth/Login/Login';

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path='/auth/Acceso' component={Login}/>
        <Redirect to='/auth/Acceso'/>
      </Switch>
    </div>
  )
}
