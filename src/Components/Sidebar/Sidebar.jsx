import React from "react";
import "../Sidebar/Sidebar.css";
import { FaTimes, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ErroLogeo } from "../../Action/auth.action";
import {MenuAdmin} from './MenuAdmin';
import {MenuEmpleado} from '../Sidebar/MenuEmpleado';
export const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();

  const { color } = useSelector((state) => state.color);
  const {dateUser} = useSelector((state)=> state.auth);
  const { color1, color2 } = !!color && color[0];
  const {Admin} =dateUser[0].results[0];

  const Salir = () => {
    dispatch(ErroLogeo());
  };
  return (
    <div
      id="sidebar"
      className={sidebarOpen ? "sidebar-responsive" : ""}
      style={
        color1 !== undefined
          ? { background: color1 }
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
        {(Admin  == 1) ? (<MenuAdmin/>) : (<MenuEmpleado/>)}

        
        <h2
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          Salida
        </h2>
        <div
          className="sidebar__logout"
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          <i>
            <FaSignInAlt />
          </i>
          <Link
            to=''
            style={
              color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
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
