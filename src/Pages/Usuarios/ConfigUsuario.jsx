import React, { useEffect, useState } from 'react'
import { Table } from '../../Components/Table/table';
import { useDispatch, useSelector } from "react-redux";
import { SacaEmpleados,DesactivaEmpleado,ActivarEmpleado,EnviarEmail } from '../../Action/usuario.action';
import { FaUserLock,FaKey,FaUserCheck } from "react-icons/fa";
import {FormularioContra} from '../../Components/Formularios/formularioContra';
import {VentanaModal} from '../../Components/Modal/VentanaModal';


export const ConfigUsuario = () => {

  const dispatch = useDispatch();
  const [usuarioSet,getUsuario]=useState(false);
  const { auth, usuario } = useSelector((state) => state);
  const { dateUser } = auth;
  const { idTienda } = dateUser[0].results[0];

  const data = !!usuario && usuario.empleados;

  useEffect(() => {
    dispatch(SacaEmpleados(idTienda
    ));
  }, []);

  useEffect(() => {

    return () => {

    }

  }, []);

  const Header = () => {
    return (
      <tr>
        <th>Num. Usuario</th>
        <th>Nombre Completo</th>
        <th>Hora Acceso</th>
        <th>Tienda</th>
        <th>Estado</th>
        <th>Acciones</th>

      </tr>
    );
  }
  const DesactivarUsuario=(idUser)=>{
    dispatch(DesactivaEmpleado(idUser,idTienda));
  }
  const ActivarUsuario=(idUser)=>{
    dispatch(ActivarEmpleado(idUser,idTienda));
  }
  const RecuperarContraseña=()=>{
    dispatch(EnviarEmail(idTienda));
  }
  const DesactivarModal=()=>{
    getUsuario(false);
  }
  const ActivarModal=()=>{
    getUsuario(true);
  }

  const RegistroMostrar=()=>{
    return (
      <VentanaModal
        texto="Restrablecer Contraseña"
        DesactivarProveedor={DesactivarModal}
        Formulario={FormularioContra}
        tamanio='xl'
      />
    );
  }

  const Content = () => {
    const content = data !== null ?
      data.map((valor) => {
        return (
          <tr key={valor.idUsuario}>
            <td>{valor.idUsuario}</td>
            <td>{valor.nombre}</td>
            <td>{valor.horAcceso}</td>
            <td>{valor.nombreTienda}</td>
            {valor.status === 1 ? <td>Activado</td>:<td>Desactivado</td> }
            <td className="align-items-center">
              <button className="btn btn-danger mr-3" onClick={()=> DesactivarUsuario(valor.idUsuario)}>
                <FaUserLock />
              </button>
              <button className="btn btn-info mr-3 text-white"
              onClick={()=>RecuperarContraseña()}
              >
                <FaKey />
              </button>
              <button className="btn btn-warning mr-3 text-white"
              onClick={()=>ActivarUsuario(valor.idUsuario)}
              >
                <FaUserCheck />
              </button>
            </td>

          </tr>
        );
      })
      : []
    return content;
  }
  const TablaDibujar = () => {
    return <Table Header={Header} Content={Content} idnombre="tablaUsuario" />;
  };
  return (
    <main>
      <div className="main__container">
        <div className="raya">
          <h3>Lista de Usuarios</h3>
          <div className="card__estadisticas">
            {TablaDibujar()}
          </div>
        </div>
      </div>
    </main>
  )
}
