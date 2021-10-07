import React, { useState,useEffect } from "react";
import "../componest.styles.css";
import { Navegacion } from "../Navbar/navegacion";
import { Sidebar } from "../Sidebar/Sidebar";
import { BrowserRouter as Router, Switch,useHistory } from "react-router-dom";
import { WithRoute } from "../WithRoute/WithRouteComponent";
import {ErrorToken} from '../../Action/auth.action';
import {useDispatch} from 'react-redux';
import {CatalogoProductos} from '../../Pages/Productos/CatalogoProductos';

export const LayoutEmpleado=()=>{
  
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
  }, []);

  return (
    <Router>
      <div className="contenedor">
        <Navegacion  openSidebar={OpenSideBar} />
        <Switch>  
          <WithRoute path="/catalogoproductos" Component={CatalogoProductos}/>       
        </Switch>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={CloseSideBar} />
      </div>
    </Router>
  );
}