import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter/auth.router";
import { PrivateRouter } from "./privateRouter";
import { Layout } from "../Components/Layout/layout";
import { LayoutEmpleado } from "../Components/Layout/layoutEmpleado";
import { useSelector, useDispatch } from "react-redux";
import { VerificarUser } from "../Action/auth.action";
import { PrivateRouterEmpleado } from "../Routers/privateRouterEmpleado";

export const Rutas = () => {
  
  const history = useHistory();
  const dispatch = useDispatch();
  const { logeado, dateUser } = useSelector((selector) => selector.auth);
  const datos = !!dateUser && dateUser[0];
  const { Admin, Empleado } = !!datos && datos.results[0];

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const id = JSON.parse(localStorage.getItem("0"));
    if (token) {
      dispatch(VerificarUser(id, token));
    }
  }, [history]);

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <PrivateRouter
            isAuthen={logeado}
            admin={Admin}
            path="/dash"
            component={Layout}
          />
          <PrivateRouterEmpleado
            isAuthen={logeado}
            empleado={Empleado}
            path="/catalogoproductos"
            component={LayoutEmpleado}
          />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </Router>
  );
};
