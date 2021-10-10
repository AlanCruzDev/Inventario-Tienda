import React, { useEffect } from "react";
import {useHistory} from 'react-router-dom';
import {Table} from '../../Components/Table/table';
import { useDispatch, useSelector } from "react-redux";
import {ErrorToken} from '../../Action/auth.action';
import {ListarProductos,LimpiarVariables} 
from '../../Action/productos.action';
import ReactHTMLTableToExcel from "react-html-table-to-excel";

export const CatalogoProductos = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  
  const { auth, producto } = useSelector((state) => state);

  const { dateUser } = auth;
  const { idTienda } = dateUser[0].results[0];

  const { listadoProducto } = producto;
  const data = !!listadoProducto && listadoProducto.results;

  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      dispatch(ErrorToken());
      history.push("/auth");
    }
  }, []);

  useEffect(() => {
    dispatch(ListarProductos(idTienda));
    return () => {
      dispatch(LimpiarVariables());
    };
  }, []);

  const Header = () => {
    return (
      <tr>
        <th>Nombre Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Nombre Proveedor</th>
        <th>Nombre Categoria</th>
      </tr>
    );
  };
  const Content = () => {
    const content = data.map((valor) => {
      return (
        <tr key={valor.idProducto}>
          <td>{valor.NombreProducto}</td>
          <td>{valor.Precio}</td>
          <td>{valor.Cantidad}</td>
          <td>{valor.NombreProveedor}</td>
          <td>{valor.NombreCategoria}</td>
        </tr>
      );
    });
    return content;
  };
  const TablaDibujar = () => {
    return <Table Header={Header} Content={Content} idnombre="tablaProducto" />;
  };

  return (
    <main>
      <div className="main__container">
        <div className="raya">
          <h3>Lista de Productos</h3>
        </div>
        <div className="estadisticas__estudios">
          <div className="card-header">
            <ul className="nav card-header-tabs ml-auto">
              <li className="d-inline p-2">
                <ReactHTMLTableToExcel
                  id="tablaProductos"
                  className="btn btn-secondary"
                  table="tablaProducto"
                  filename="listaProductosxls"
                  sheet="Productosjajajajaxls"
                  buttonText="Descargar Exel"
                />
              </li>
            </ul>
          </div>
          <div className="card__estadisticas">
            {data.length > 0 ? TablaDibujar() : null}
          </div>
        </div>
      </div>
    </main>
  );
};
