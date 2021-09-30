import React from "react";
import "./estadisticas.css";
import { Cards } from "../../Components/Cards/cards";
import {DataEstadisticas} from './DataEstadisticas';
import {Table} from '../../Components/Table/table';

export const Estadisticas = () => {

  const {data}=DataEstadisticas();

  const showCards=()=>{
    return (
      <>
        {data.map((item, index) => (
            <Cards
              key={index}
              icono={item.icon}
              titulo={item.titulo}
              subtitulo={item.subtitulo}
              path={item.path}
            />
          ))}
      </> 
    )
  }
  const Header =()=>{
    return (
      <tr>
          <th>Estudios</th>
          <th>Ventas</th>
      </tr>
    )
  }
  const Content = ()=>{
    return (
      <tr>
        <td>webolas</td>
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
        <div className="main__cards">
          {showCards()}
        </div>
        <div className="raya">
            <h3>Lista Productos</h3>
        </div>
        <div className="estadisticas__estudios">
          <div className="card__estadisticas">
            <h4>5 Productos mas Vendidos</h4>
            <hr />
            <div className="row">
              <div className="col-md-12">
                {TableDrawer()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
