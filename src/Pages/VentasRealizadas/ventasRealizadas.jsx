import React from 'react';
import './ventasRealiza.css';
import {Table} from '../../Components/Table/table';

export const VentasRealizadas = () => {

  const Header =()=>{
    return (
      <tr>
          <th>Empresa</th>
          <th>No. de Solicitudes</th>
          <th>Total</th>
          <th>Cobrado</th>
          <th>Saldo</th>
      </tr>
    )
  }
  const Content = ()=>{
    return (
      <tr>
        <td>webolas</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
        <td>2</td>
      </tr>
    );
  }
  const TableDrawer =()=>{
    return (
      <Table
        Header={Header}
        Content={Content} 
      />
    )
  }
  return (
    <main>
      <div className="main__container">
        <div className="row">
          <div className="col-md-5">
          <div class="mb-3 row">
                <label for="" class="col-md-5 col-form-label" style={{fontSize:'2rem'}}>Fecha Inicio</label>
                <div class="col-md-7 mt-3">
                  <input type="date" class="form-control" id="staticEmail" />
                </div>
            </div> 
          </div>
          <div className="col-md-5">
          <div class="mb-3 row">
                <label for="" class="col-md-5 col-form-label" style={{fontSize:'2rem'}}>Fecha Inicio</label>
                <div class="col-md-7 mt-3">
                  <input type="date" class="form-control" id="staticEmail" />
                </div>
            </div>
          </div>
          <div className="col-md-2 mt-3">
            <button className="btn btn-primary w-100 boton" style={{fontSize:'1.2rem'}}>Buscar</button>
          </div>
        </div>
        <div className="raya">
            <h3>Resultados</h3>
        </div>
          <div className="card__estadisticas">
            <h4>Numero de ordenes por medico</h4>
            <hr />
            <div className="row">
              <div className="col-md-12">
                {TableDrawer()}
              </div>
            </div>
          </div>
       
      </div>
    </main>
  )
}
