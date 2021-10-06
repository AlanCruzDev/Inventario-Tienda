import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../Hooks/useForm";
import { GetCategoria } from "../../Action/categoria.action";
import { ListarProveedores } from "../../Action/proveedor.action";
import { ErrorToken } from "../../Action/auth.action";
import {ActualizarProducto,LimpiarVariables,ObtenerProducto} from '../../Action/productos.action';
import {MensajeAlerta} from '../../middlewares/alerts.middle';
import {useParams,useHistory} from "react-router-dom";

export const EditarProducto = () => {
  let { id } = useParams();


  const history = useHistory();
  const dispatch = useDispatch();
  const [getimagen,setImagen]=useState('');
  const { categorias, proveedor,auth,producto } = useSelector((state) => state);
  
  // extraccion
  const {dateUser}=auth;
  const {idTienda}=dateUser[0].results[0];
  const {productouno}= producto;
      
  const {results} =!!productouno && productouno;
  const {NombreProducto,NombreCategoria,Precio,Cantidad,NombreProveedor,CodigoSerie}=!!results && results[0];

  const [values, handleInputChange,reset] = useForm({
    _NombreProducto: "",
    _Precio: 0,
    _CodigoSerie: "",
    _Imagen: "",
    _fkProveedor: 0,
    _fkCategoria: 0,
    _Cantidad: 0,
    _FechaLllegada: "",
    _fkProducto: 0,
    _fkTienda: 0,
  });

  const {
    _NombreProducto,
    _Precio,
    _CodigoSerie,
    _fkProveedor,
    _fkCategoria,
    _Cantidad,
    _FechaLllegada,
  } = values;



  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      dispatch(ErrorToken());
      history.push("/auth");
    }
    dispatch(GetCategoria());
    dispatch(ListarProveedores());
    dispatch(ObtenerProducto(id));

    return () => {
      dispatch(LimpiarVariables());
    };
  }, []);

  const uploadImagen=async(e)=>{
    const file=e.target.files[0];
    const base64= await convertBase64(file);
    setImagen(base64)
  }

  const convertBase64=(archivo)=>{
    return new Promise((resolve,reject)=>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(archivo);
      fileReader.onload=()=>{
        resolve(fileReader.result);
      }
      fileReader.onerror=(error)=>{
        reject(error);
      }
    });
  }


  const GuardarProducto = (e) => {
    e.preventDefault();

    if(_fkProveedor > 0 && _fkCategoria > 0){
      const body = {
        _NombreProducto,
        _Precio,
        _CodigoSerie:CodigoSerie,
        _Imagen:getimagen,
        _fkProveedor,
        _fkCategoria,
        _Cantidad,
        _FechaLllegada,
        _fkTienda:idTienda,
      };
      dispatch(ActualizarProducto(body));
    }
  };
  
  return (
    <main>
    <div className="main__container">
      <div className="raya">
        <h3>Actualizar Producto</h3>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <form className="row g-3" onSubmit={GuardarProducto}>
            <div className="col-md-6">
              <label htmlFor="" className="form-label">
                Nombre Producto
              </label>
              <input
                type="text"
                className="form-control"
                name="_NombreProducto"
                value={_NombreProducto}
                onChange={handleInputChange}
                placeholder={NombreProducto}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="" className="form-label">
                Codigo de Barras
              </label>
              <input
                type="text"
                className="form-control"
                name="_CodigoSerie"
                value={_CodigoSerie}
                onChange={handleInputChange}
                placeholder={CodigoSerie}
                disabled
              />
            </div>
            <div className="col-6">
              <label htmlFor="inputAddress" className="form-label">
                Precio
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="$ 0.00"
                name="_Precio"
                value={_Precio}
                onChange={handleInputChange}
                placeholder={Precio}
              />
            </div>
            <div className="col-6">
              <label htmlFor="formFile" className="form-label">
                Selecciona una Imagen
              </label>
              <input className="form-control" type="file" onChange={(e) => uploadImagen(e)} />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputState" className="form-label">
                Proveedor
              </label>
              <select
                className="form-select"
                name="_fkProveedor"
                value={_fkProveedor}
                onChange={handleInputChange}
                placeholder={NombreProveedor}
              >
                { (proveedor.proveedorList !== null  && proveedor.proveedorList !== undefined)
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
                name="_fkCategoria"
                value={_fkCategoria}
                onChange={handleInputChange}
                placeholder={NombreCategoria}
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
                name="_Cantidad"
                value={_Cantidad}
                onChange={handleInputChange}
                placeholder={Cantidad}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="" className="form-label">
                Fecha Llegada
              </label>
              <input
                type="date"
                className="form-control"
                name="_FechaLllegada"
                value={_FechaLllegada}
                onChange={handleInputChange}
              />
            </div>
            <div className="text-center mt-5">
              <button type="submit" className="btn btn-primary w-25">
                Actualizar 
              </button>
            </div>
          </form>
          <div></div>
        </div>
      </div>
      <div>{MensajeAlerta(producto.bandera,
        'Producto'
        ,'producto actualizado'
        ,'producto no actualizado'
        )}</div>
    </div>
  </main>
  )
}
