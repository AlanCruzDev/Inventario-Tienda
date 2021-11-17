import React from "react";
import "../Sidebar/Sidebar.css";
import { FaUser,FaUserSlash,FaLemon,FaMarker,FaClipboard,FaCashRegister,FaClipboardList} from 'react-icons/fa';
import { Link } from "react-router-dom";


export const MenuAdmin = ({color2}) => {
  return (
    <>
      <h2
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        CATALOGOS
      </h2>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaLemon />
        </i>
        <Link
          to='/listaproductos'
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          Lista Productos
        </Link>
      </div>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaMarker />
        </i>
        <Link
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
          to='/nuevoProducto'
        >
          Nuevo Producto
        </Link>
      </div>
      <h2
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        INVENTARIO
      </h2>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaClipboard />
        </i>
        <Link
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
          to='/dash'
        >
          Stock
        </Link>
      </div>
      <h2
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        Usuarios
      </h2>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaUser />
        </i>
        <Link
          to='/registrousuario'
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          Registro Usuarios
        </Link>
      </div>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaUserSlash />
        </i>
        <Link
          to='/usuarioConfig'
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          Desactivar Usuarios
        </Link>
      </div>
    </>
  );
};
