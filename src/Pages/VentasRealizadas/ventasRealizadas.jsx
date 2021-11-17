import React, { useEffect } from "react";
import "./ventasRealiza.css";
import { useDispatch, useSelector } from "react-redux";
import { ObtenerVentasFinalizadas,LimpiarVentas } from "../../Action/ventas.action";
import { Table } from "../../Components/Table/table";
import useForm from '../../Hooks/useForm';

export const VentasRealizadas = () => {

  const dispatch =useDispatch();
  const { auth,ventas } = useSelector((state) => state);
  const { dateUser } = auth;
  const arreglo =!!ventas && ventas.ventas;
  const { idTienda, idUsuario } = dateUser[0].results[0];
  
  const [values, handleInputChange]=useForm({
    fechaInicio:'',
    fechaFinal:''
  });

  const {fechaInicio,fechaFinal}=values;

  useEffect(() => {
    // limpiamos las variables
    return () => {
      dispatch(LimpiarVentas());
    };
  }, []);
  const Header = () => {
    return (
      <tr>
        <th>No.Venta</th>
        <th>Nombre Producto</th>
        <th>Monto Final</th>
        <th>Cantidad</th>
      </tr>
    );
  };
  const Content = () => {
    const content = arreglo.map((valor, index)=>{
      return (
        <tr key={index}>
        <td>{valor.idVentas}</td>
        <td>{valor.NombreProducto}</td>
        <td>{valor.MontoFinal}</td>
        <td>{valor.Cantidad}</td>
      </tr>
      );
    });
    return content
  };
  const TableDrawer = () => {
    return <Table Header={Header} Content={Content} />;
  };

  const BuscarProductos = (e) => {
    e.preventDefault();
    if(fechaInicio !== '' && fechaFinal !== ''){
      dispatch(ObtenerVentasFinalizadas(fechaInicio,fechaFinal,idUsuario,idTienda)); 
    }
  };
  return (
    <main>
      <div className="main__container">
        <form className="row g-3" onSubmit={BuscarProductos}>
          <div className="col-md-5">
            <div class="mb-3 row">
              <label
                htmlFor=""
                class="col-md-5 col-form-label"
                style={{ fontSize: "2rem" }}
              >
                Fecha Inicio
              </label>
              <div className="col-md-7 mt-3">
                <input 
                  type="date" 
                  className="form-control" 
                  id="staticEmail"
                  name='fechaInicio' 
                  value={fechaInicio}
                  onChange={handleInputChange}
                  />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="mb-3 row">
              <label
                htmlfor=""
                className="col-md-5 col-form-label"
                style={{ fontSize: "2rem" }}
              >
                Fecha Termino
              </label>
              <div className="col-md-7 mt-3">
                <input 
                  type="date" 
                  className="form-control" 
                  id="staticEmail" 
                  name='fechaFinal' 
                  value={fechaFinal}
                  onChange={handleInputChange}
                  />
              </div>
            </div>
          </div>
          <div className="row col-md-2 mt-3 align-content-center">
            <button
              type="submit"
              className="btn btn-primary w-100 boton"
              style={{ fontSize: "1.2rem" }}
            >
              Buscar
            </button>
          </div>
        </form>
        <div className="raya">
          <h3>Resultados</h3>
        </div>
        <div className="card__estadisticas">
          <h4>Numero de Ventas</h4>
          <hr />
          <div className="row">
            <div className="col-md-12">{TableDrawer()}</div>
          </div>
        </div>
      </div>
    </main>
  );
};
