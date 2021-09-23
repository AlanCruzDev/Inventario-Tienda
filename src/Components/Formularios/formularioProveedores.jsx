import React, { useEffect,useState } from "react";
import { ObtenerEstados, LimpiarEstado,ObtenerMunicipios} from "../../Action/direccion.action";
import { useDispatch, useSelector } from "react-redux";
import useForm  from '../../Hooks/useForm';

export const FormularioProveedores = () => {
  
  const dispatch = useDispatch();
  const [estadoGet, setestado] = useState({
    Estado:''
  });

  const { estados } = useSelector((state) => state.direccion);
  const {municipios} = useSelector((state)=>state.direccion);

  const [values,handleInputChange] = useForm({
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
      Estado:e.target.value
    });

    dispatch(ObtenerMunicipios(municipios));
  }

  const GuardarProveedor=(e)=>{
    e.preventDefault(); 

  }

  return (
    <div className="container">
      <form class="row g-3" onSubmit={GuardarProveedor}>
        <h2>Datos Generales:</h2>
        <div class="col-md-6">
          <label for="" class="form-label">
            Nombre Proveedor
          </label>
          <input type="text" class="form-control"
            name="NombreProveedor"
            value={NombreProveedor}
            onChange={handleInputChange}
          />
        </div>
        <div class="col-md-6">
          <label for="" class="form-label">
            Cuit
          </label>
          <input type="text" class="form-control"
            name="Cuit"
            value={Cuit}
            onChange={handleInputChange}
          />
        </div>
        <div class="col-md-4">
          <label for="" class="form-label">
            Telefono
          </label>
          <input type="number" class="form-control" 
            name="Telefono"
            value={Telefono}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-12">
          <h2>Direccion:</h2>
        </div>
        <div className="col-md-4">
          <label for="inputState" class="form-label">
            Estado
          </label>
          <select id="inputState" class="form-select" onChange={handelInput}>
            {(estados !== undefined && estados.length > 0)
              ? estados.map((values, index) => <option key={index}>{values}</option>)
              : null}
          </select>
        </div>
        <div className="col-md-4">
          <label for="" class="form-label">
            Municipio
          </label>
          <select id="inputState" class="form-select" onChange={handleInputChange} name="NombreDelegacion" value={NombreDelegacion}>
            {(municipios !== undefined && municipios.length > 0)
              ? municipios.map((values, index) => <option key={index}>{values}</option>)
              : null}
          </select>
        </div>
        <div className="col-md-4">
          <label for="" class="form-label">
            Cp
          </label>
          <input type="text" class="form-control" 
            name="cp"
            value={cp}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label for="" class="form-label">
            Colonia
          </label>
          <input type="text" class="form-control" 
            name="Colonia"
            value={Colonia}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label for="" class="form-label">
            Calle
          </label>
          <input type="text" class="form-control" 
            name="Calle"
            value={Calle}
            onChange={handleInputChange}
          />
        </div>
        <div class="col-md-12 text-center">
          <button type="submit" class="btn btn-primary w-25">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
};
