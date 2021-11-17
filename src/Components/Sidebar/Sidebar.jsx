import React, { useEffect } from "react";
import "../Sidebar/Sidebar.css";
import { FaTimes, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ErroLogeo } from "../../Action/auth.action";
import { MenuAdmin } from './MenuAdmin';
import { MenuEmpleado } from '../Sidebar/MenuEmpleado';
import { BuscarColor,LimpiarVariables } from '../../Action/color.action';

export const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();

  const { color } = useSelector((state) => state.color);
  const { dateUser } = useSelector((state) => state.auth);
  const { ColorBarra, ColorFuente } = !!color && color[0];
  const { Admin, idUsuario } = dateUser[0].results[0];
  
  //dispatch(BuscarColor(idUsuario));
  useEffect(()=>{
    dispatch(BuscarColor(idUsuario));
  

  },[ColorBarra])



  useEffect(()=>{

    return ()=>{
      dispatch(LimpiarVariables());
    }

  },[])

  const Salir = () => {
    dispatch(ErroLogeo());
  };
  return (
    <div
      id="sidebar"
      className={sidebarOpen ? "sidebar-responsive" : ""}
      style={
        ColorBarra !== undefined
          ? { background: ColorBarra }
          : { background: "#020501" }
      }
    >
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src="" alt="" />
          <h1>Sistema Tienda</h1>
        </div>
        <i id="sidebarIcon" onClick={() => closeSidebar()}>
          <FaTimes />
        </i>
      </div>
      <div className="sidebar__menu">
        {(Admin === 1)
          ? (<MenuAdmin
            color2={ColorFuente}
          />)
          : (<MenuEmpleado
            color2={ColorFuente}
          />
          )}
        <h2
          style={
            ColorFuente !== undefined ? { color: ColorFuente } : { color: "#f3f4f6" }
          }
        >
          Salida
        </h2>
        <div
          className="sidebar__logout"
          style={
            ColorFuente !== undefined ? { color: ColorFuente } : { color: "#f3f4f6" }
          }
        >
          <i>
            <FaSignInAlt />
          </i>
          <Link
            to=''
            style={
              ColorFuente !== undefined ? { color: ColorFuente } : { color: "#f3f4f6" }
            }
            onClick={() => Salir()}
          >
            Logaut
          </Link>
        </div>
      </div>
    </div>
  );
};
