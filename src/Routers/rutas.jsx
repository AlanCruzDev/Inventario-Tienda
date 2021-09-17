import React,{useEffect} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory
} from 'react-router-dom';
import {AuthRouter} from './AuthRouter/auth.router';
import {PrivateRouter} from './privateRouter';
import {Layout} from '../Components/Layout/layout';
import{useSelector,useDispatch} from 'react-redux';
import {VerificarUser} from '../Action/auth.action';

export const Rutas = () => {

  const history=useHistory();
  const dispatch = useDispatch();
  const login=useSelector(selector => selector.auth);

  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'));
    const id = JSON.parse(localStorage.getItem('0'));
    if(token){
      dispatch(VerificarUser(id,token));
    }
  },[history])
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/auth' component={AuthRouter}/>
          <PrivateRouter
            isAuthen={login.logeado}
            path='/dash'
            component={Layout}  
          />
          <Redirect to='/auth'/>
        </Switch>
      </div>
    </Router>
  )
}
