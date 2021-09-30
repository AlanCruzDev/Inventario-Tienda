import React from 'react';
import {Table} from '../../Components/Table/table';
export const ListaProducto = () => {

  const Header =()=>{
    return (
      <tr>
          <th>Nombre Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Nombre Proveedor</th>
          <th>Nombre Categoria</th>
      </tr>
    );
  }

  const Content=()=>{

  }
  const TablaDibujar=()=>{
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
        <div className="raya">
            <h3>Lista de Productos</h3>
        </div>
        <div className="estadisticas__estudios">
          <div className="card__estadisticas">

          </div>
        </div>
      </div>
    </main>
  )
}

