import React,{useEffect} from "react";
import "./auth.styles.css";
import{useDispatch,useSelector} from 'react-redux';
import useForm from '../../Hooks/useForm';
import { useHistory } from "react-router-dom";
import {IniciarSesion} from '../../Action/auth.action';
export const Login = () => {

  const dispatch=useDispatch();
  const history=useHistory();

  const login=useSelector(selector => selector.auth);

  const[values,handleInputChange]=useForm({
    usser:'',
    password:''
  });

  const{usser,password}=values;

  useEffect(()=>{
    if(login.logeado){
      history.push('/dash');      
    }
  },[login.logeado])

  const VerificarUser=(e)=>{
    e.preventDefault();
    if(usser !== null  && password !== null){
      dispatch(IniciarSesion(usser,password));
    }
  }

  return (
    <div className="fondo">
      <div className="container">
        <div className="row justify-content-center">
          <br />
          <div className="col-md-6 mt-5">
            <div className="mt-5 fondo__login">
              <form className="login-form" onSubmit={VerificarUser}>
                <h3 className="text-center mt-3 titlo__login">Bienvenido</h3>
                <div className="form-group mt-3">
                  <label className="campo">Usuario</label>
                  <input 
                    type="text" 
                    className="form-control input-text"
                    name="usser"
                    value={usser}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="form-group mt-3">
                  <label className="campo">Contraseña</label>
                  <input 
                    type="password" 
                    className="form-control 
                    input-text"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    />
                </div>
                <div className="mt-5 text-center">
                  <button type="submit" className="btn btn-primary w-75 btn-lg">
                    Acceso
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};