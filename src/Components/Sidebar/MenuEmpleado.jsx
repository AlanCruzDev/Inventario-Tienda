import React from 'react';
import "../Sidebar/Sidebar.css";
import { FaShoppingCart,FaAppleAlt,FaClipboard} from 'react-icons/fa';
import { Link } from "react-router-dom";
export const MenuEmpleado =({color2})=>{

  return (
    <>
      <h2
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        Productos
      </h2>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaAppleAlt />
        </i>
        <Link
          to="/catalogoproductos"
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          Lista de Productos
        </Link>
      </div>
      <h2
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        Carrito Compras
      </h2>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaClipboard/>
        </i>
        <Link
          to="/carrito"
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          Registro de compras
        </Link>
      </div>
      <h2
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        Confirmacion de compras
      </h2>
      <div
        className="sidebar__link"
        style={color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }}
      >
        <i>
          <FaShoppingCart />
        </i>
        <Link
          to="/ComprasRealizadas"
          style={
            color2 !== undefined ? { color: color2 } : { color: "#f3f4f6" }
          }
        >
          Compras Realizadas
        </Link>
      </div>
    </>
  );
}