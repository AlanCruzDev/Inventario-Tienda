import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../Hooks/useForm";
import { ErrorToken } from "../../Action/auth.action";
import {RegistreUsuario} from '../../Action/usuario.action';
import {MensajeAlerta} from '../../middlewares/alerts.middle';
export const RegistroUsuario = () => {


  const history = useHistory();
  const dispatch = useDispatch();
  const { auth,usuario } = useSelector((state) => state);
  const { idTienda } = auth.dateUser[0].results[0];

  const [values, handleInputChange, reset] = useForm({
    _Nombre: "",
    _Paterno: "",
    _Materno: "",
    _NombreUser: "",
    _contraseña: "",
    _horaAcceso: "",
  });

  const { _Nombre, _Paterno, _Materno, _NombreUser, _contraseña, _horaAcceso } =values;

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      dispatch(ErrorToken());
      history.push("/auth");
    }
  }, [usuario.registro]);

  const GuardarUsuario = (e) => {
    e.preventDefault();
    const data = {
      _Nombre,
      _Paterno,
      _Materno,
      _NombreUser,
      _contraseña,
      _horaAcceso,
      _fkTienda: idTienda,
    };
    dispatch(RegistreUsuario(data));
  };

  return (
    <main>
      <div className="main__container">
        <div className="raya">
          <h3>Registro de Usuario</h3>
        </div>
        <div className="card">
          <div className="card-body">
            <form className="row g-3" onSubmit={GuardarUsuario}>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="_Nombre"
                  value={_Nombre}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Paterno
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="_Paterno"
                  value={_Paterno}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Materno
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="_Materno"
                  value={_Materno}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Nombre de Usuario
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="_NombreUser"
                  value={_NombreUser}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="_contraseña"
                  value={_contraseña}
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="" className="form-label">
                  Hora de Acceso
                </label>
                <input
                  type="time"
                  className="form-control"
                  name="_horaAcceso"
                  value={_horaAcceso}
                  onChange={handleInputChange}
                />
              </div>
              <div className="text-center mt-5">
                <button type="submit" className="btn btn-primary w-25">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>{MensajeAlerta(usuario.registro,'Usuario','usuario registrado','usuario no registrado')}
      </div>
    </main>
  );
};
