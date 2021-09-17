import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorToken } from "../../Action/auth.action";
export const NuevoProducto = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      dispatch(ErrorToken());
      history.push("/auth");
    }
  }, []);

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
                <button className="btn btn-primary">Agregar Catalogo</button>
              </li>
              <li className="d-inline p-2">
                <button className="btn btn-secondary">Generar Proveedor</button>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <form className="row g-3">
              <div className="col-md-6">
                <label for="" className="form-label">
                  Nombre Producto
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div classNameName="col-md-6">
                <label for="" className="form-label">
                  Codigo de Barras
                </label>
                <input type="text" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-6">
                <label for="inputAddress" className="form-label">
                  Precio
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="$ 0.00"
                />
              </div>
              <div className="col-6">
              <label for="formFile" className="form-label">Selecciona una Imagen</label>
              <input className="form-control" type="file" id="formFile"/>
              </div>
              <div className="col-md-6">
                <label for="inputState" className="form-label">
                  Proveedor
                </label>
                <select id="inputState" className="form-select">
                  <option selected
                  >Choose...</option>
                  <option>...</option>
                </select>
              </div>

              <div className="col-md-6">
                <label for="inputState" className="form-label">
                  Categoria
                </label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
