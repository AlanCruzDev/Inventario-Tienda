import React, { useEffect,useState } from "react";
import { ObtenerEstados, LimpiarEstado,ObtenerMunicipios} from "../../Action/direccion.action";
import { useDispatch, useSelector } from "react-redux";
import useForm  from '../../Hooks/useForm';
import { InsertarProveedor } from "../../Action/proveedor.action";
import {MensajeAlerta} from '../../middlewares/alerts.middle';

export const FormularioProveedores = () => {
  
  const dispatch = useDispatch();
  const [estadoGet, setestado] = useState({
    Estado:''
  });

  const { estados,municipios } = useSelector((state) => state.direccion);
  const {proveedor}= useSelector((state) =>state);

  

  const [values,handleInputChange,reset] = useForm({
    NombreProveedor:'',
    Cuit:'',
    Telefono:'',
    NombreCiudad:'',
    NombreDelegacion:'',
    cp:'',
    Colonia:'',
    Calle:''
  });

  const {NombreProveedor,Cuit,Telefono,NombreCiudad,NombreDelegacion,cp,Colonia,Calle}=values;
 
  useEffect(() => {
    dispatch(ObtenerEstados());
    return () => {
      dispatch(LimpiarEstado());
    };
  }, []);

  const handelInput=(e)=>{
    let index = e.target.selectedIndex;
    let municipios = e.target.options[index].text;
      setestado({
      ...estadoGet,
      Estado:index
    });

    dispatch(ObtenerMunicipios(municipios));
  }

  const GuardarProveedor=(e)=>{
    e.preventDefault(); 
    const body ={NombreProveedor,Cuit,Telefono,NombreCiudad:(estadoGet.Estado+1),NombreDelegacion,cp,Colonia,Calle}

    if(NombreProveedor !== '' && Cuit !== ''){
      dispatch(InsertarProveedor(body));
      reset();
    }else{
      alert('Campos Vacios');
    }
  }

  return (
    <div className="container">
      <form className="row g-3" onSubmit={GuardarProveedor}>
        <h2>Datos Generales:</h2>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">
            Nombre Proveedor
          </label>
          <input type="text" className="form-control"
            name="NombreProveedor"
            value={NombreProveedor}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">
            Cuit
          </label>
          <input type="text" className="form-control"
            name="Cuit"
            value={Cuit}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="" className="form-label">
            Telefono
          </label>
          <input type="number" className="form-control" 
            name="Telefono"
            value={Telefono}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-12">
          <h2>Direccion:</h2>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            Estado
          </label>
          <select id="inputState" className="form-select" onChange={handelInput}>
            {(estados !== undefined && estados.length > 0)
              ? estados.map((values, index) => <option key={index}>{values}</option>)
              : null}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="" className="form-label">
            Municipio
          </label>
          <select id="inputState" className="form-select" onChange={handleInputChange} name="NombreDelegacion" value={NombreDelegacion}>
            {(municipios !== undefined && municipios.length > 0)
              ? municipios.map((values, index) => <option key={index}>{values}</option>)
              : null}
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="" className="form-label">
            Cp
          </label>
          <input type="text" className="form-control" 
            name="cp"
            value={cp}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">
            Colonia
          </label>
          <input type="text" className="form-control" 
            name="Colonia"
            value={Colonia}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">
            Calle
          </label>
          <input type="text" className="form-control" 
            name="Calle"
            value={Calle}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-primary w-25">
            Guardar
          </button>
        </div>
      </form>
      <div>{MensajeAlerta(proveedor.bandera,'Proveedor Registrado',
        'Correctamente!','Proveedor ya Registrado'
      )}</div>
    </div>
  );
};
