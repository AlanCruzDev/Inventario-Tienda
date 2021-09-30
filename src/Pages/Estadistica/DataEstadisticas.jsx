import React,{useState} from 'react'
import {
  FaDollarSign,
  FaDollyFlatbed,
  FaUser,
  FaBox
} from "react-icons/fa";


export const DataEstadisticas = () => {

  const [data, setData] = useState([
    {
      icon: <FaUser size={25} style={{ color: "violet" }} />,
      titulo: "Clientes",
      subtitulo: "578",
      path:'/clientes'
    },
    {
      icon: <FaDollarSign size={25} style={{ color: "red" }} />,
      titulo: "Ventas Realizadas Mes",
      subtitulo: "578",
      path: "/VentasRealizadas",
    },
    {
      icon: <FaBox size={25} style={{ color: "red" }} />,
      titulo: "Productos",
      subtitulo: "578",
      path: "/listaproductos",
    },
    {
      icon: <FaDollyFlatbed size={25} style={{ color: "violet" }} />,
      titulo: "Estado Ventas",
      subtitulo: "578",
      path: "/ventasfinalizadas",
    },
  ]);
  return {data,setData};
}
