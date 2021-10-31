import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../Hooks/useForm";

import { GetCategoria } from "../../Action/categoria.action";
import { ListarProveedores } from "../../Action/proveedor.action";
import { ErrorToken } from "../../Action/auth.action";
import {
  InsertarProducto,
  LimpiarVariables,
} from "../../Action/productos.action";

import { VentanaModal } from "../../Components/Modal/VentanaModal";
import { FormularioProveedores } from "../../Components/Formularios/formularioProveedores";
import { MensajeAlerta } from "../../middlewares/alerts.middle";

export const NuevoProducto = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [proveedorSet, getproveedor] = useState(false);
  const [getimagen, setImagen] = useState("");
  const { categorias, proveedor, auth, producto } = useSelector(
    (state) => state
  );

  const [values, handleInputChange, reset] = useForm({
    NombreProducto: "",
    Precio: 0,
    CodigoSerie: "",
    Imagen: "",
    fkProveedor: 0,
    fkCategoria: 0,
    Cantidad: 0,
    FechaLllegada: "",
    fkProducto: 0,
    fkTienda: 0,
  });

  const {
    NombreProducto,
    Precio,
    CodigoSerie,
    fkProveedor,
    fkCategoria,
    Cantidad,
    FechaLllegada,
  } = values;

  const { dateUser } = auth;
  const { idTienda } = dateUser[0].results[0];

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      dispatch(ErrorToken());
      history.push("/auth");
    }
    return () => {
      dispatch(LimpiarVariables());
    };
  }, [proveedorSet]);

  useEffect(() => {
    dispatch(GetCategoria());
    dispatch(ListarProveedores());

    return () => {
      dispatch(LimpiarVariables());
    };
  }, [producto.bandera]);

  const ActivarProveedor = () => {
    getproveedor(true);
  };
  const DesactivarProveedor = () => {
    getproveedor(false);
  };

  const uploadImagen = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImagen(base64);
  };

  const convertBase64 = (archivo) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(archivo);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const MostrarProveedores = () => {
    return (
      <VentanaModal
        texto="Proveedores"
        DesactivarProveedor={DesactivarProveedor}
        Formulario={FormularioProveedores}
        tamanio="xl"
      />
    );
  };

  const GuardarProducto = (e) => {
    e.preventDefault();
    const body = {
      NombreProducto,
      Precio,
      CodigoSerie,
      Imagen: getimagen,
      fkProveedor,
      fkCategoria,
      Cantidad,
      FechaLllegada,
      fkTienda: idTienda,
    };
    if (fkCategoria !== 0 || fkProveedor !== 0) {
      dispatch(InsertarProducto(body));
    }else{
      alert('Seleccione Categoria/Proveedor');
    }
    reset();
  };

  return (
    <main>
      <div className="main__container">
        <div className="raya">
          <h3>Registro Producto</h3>
        </div>
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav card-header-tabs ml-auto">
              <li className="d-inline p-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => ActivarProveedor()}
                >
                  Generar Proveedor
                </button>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <form className="row g-3" onSubmit={GuardarProducto}>
              <div className="col-md-6">
                <label htmlFor="" className="form-label">
                  Nombre Producto
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="NombreProducto"
                  value={NombreProducto}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="form-label">
                  Codigo de Barras
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="CodigoSerie"
                  value={CodigoSerie}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputAddress" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="$ 0.00"
                  name="Precio"
                  value={Precio}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="formFile" className="form-label">
                  Selecciona una Imagen
                </label>
                <input
                  className="form-control"
                  type="file"
                  onChange={(e) => uploadImagen(e)}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputState" className="form-label">
                  Proveedor
                </label>
                <select
                  className="form-select"
                  name="fkProveedor"
                  value={fkProveedor}
                  onChange={handleInputChange}
                >
                  {proveedor.proveedorList !== null &&
                  proveedor.proveedorList !== undefined
                    ? proveedor.proveedorList.map((value, index) => (
                        <option key={index} value={value.idProveedor}>
                          {value.NombreProveedor}
                        </option>
                      ))
                    : null}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputState" className="form-label">
                  Categoria
                </label>
                <select
                  className="form-select"
                  name="fkCategoria"
                  value={fkCategoria}
                  onChange={handleInputChange}
                >
                  {categorias.categoria !== null
                    ? categorias.categoria.map((value, index) => (
                        <option key={index} value={value.idCategoria}>
                          {value.NombreCategoria}
                        </option>
                      ))
                    : null}
                </select>
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="form-label">
                  Cantidad de Producto
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0"
                  name="Cantidad"
                  value={Cantidad}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="" className="form-label">
                  Fecha Llegada
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="FechaLllegada"
                  value={FechaLllegada}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-center mt-5">
                <button type="submit" className="btn btn-primary w-25">
                  Guardar
                </button>
              </div>
            </form>
            <div></div>
          </div>
        </div>
        {proveedorSet ? MostrarProveedores() : null}
        <div>
          {MensajeAlerta(
            producto.bandera,
            "Producto",
            "producto registrado",
            "producto no registrado"
          )}
        </div>
      </div>
    </main>
  );
};
