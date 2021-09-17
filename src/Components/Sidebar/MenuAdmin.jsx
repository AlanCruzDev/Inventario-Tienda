import React from "react";
import "../Sidebar/Sidebar.css";
import { FaUser,FaUserSlash,FaLemon,FaMarker,FaClipboard,FaCashRegister,FaClipboardList} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";


export const MenuAdmin = () => {
  const { color } = useSelector((state) => state.color);
  const { color2 } = !!color && color[0];

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
        FIANZAS
      </h2>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaCashRegister />
        </i>
        <Link
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          Caja
        </Link>
      </div>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaCashRegister />
        </i>
        <Link
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          Corte de Caja
        </Link>
      </div>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaClipboardList />
        </i>
        <Link
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          Balance
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
