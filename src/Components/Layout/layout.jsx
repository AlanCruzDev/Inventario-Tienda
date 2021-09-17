import React, { useState,useEffect } from "react";
import "../componest.styles.css";
import { Navegacion } from "../Navbar/navegacion";
import { Sidebar } from "../Sidebar/Sidebar";
import { BrowserRouter as Router, Switch,useHistory } from "react-router-dom";
import { WithRoute } from "../WithRoute/WithRouteComponent";
import {Estadisticas} from '../../Pages/Estadistica/estadisticas';
import {VentasRealizadas} from '../../Pages/VentasRealizadas/ventasRealizadas';
import {ErrorToken} from '../../Action/auth.action';
import {useDispatch} from 'react-redux';
import {NuevoProducto} from '../../Pages/Catalogos/nuevoProducto';

export const Layout = () => {
  const history=useHistory();
  const dispatch=useDispatch();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const OpenSideBar = () => {
    setSidebarOpen(true);
  };

  const CloseSideBar = () => {
    setSidebarOpen(false);
  };
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if(!token){
      dispatch(ErrorToken());
      history.push('/auth');
    } 
  }, [])

  return (
    <Router>
      <div className="contenedor">
        <Navegacion  openSidebar={OpenSideBar} />
        <Switch>
          <WithRoute path="/dash" Component={Estadisticas} />          
          <WithRoute path="/VentasRealizadas" Component={VentasRealizadas} />
          <WithRoute path="/nuevoProducto" Component={NuevoProducto}/>          
        </Switch>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={CloseSideBar} />
      </div>
    </Router>
  );
};
