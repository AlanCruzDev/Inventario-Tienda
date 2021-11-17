import React from 'react'
import useForm from '../../Hooks/useForm';
import { useDispatch} from 'react-redux';
import { MensajeAlerta } from '../../middlewares/alerts.middle';

export const FormularioContra = () => {

  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    nuevaContra: '',
    viejaContra: ''
  });

  const { nuevaContra, viejaContra } = values;

  const GuardarContraseña = (e) => {
    e.preventDefault();


  }
  return (
    <div className="container">
      <form className="row g-3" onChange={GuardarContraseña}>
        <h2>Nueva Contraseña</h2>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">Nueva Contraseña</label>
          <input type="password" name="nuevaContra" value={nuevaContra} onChange={handleInputChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="" className="form-label">Confirmar Contraseña</label>
          <input type="password" name="viejaContra" value={viejaContra} onChange={handleInputChange} />
        </div>
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-primary w-25">
            Guardar
          </button>
        </div>
      </form>
    </div>
  )
}
