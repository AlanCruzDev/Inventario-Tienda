import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import proyectSocket from "../../context/socketContext";
import { Table } from "../../Components/Table/table";
import { useDispatch, useSelector } from "react-redux";
import { MostrarProducto } from "./mostrarProducto";
import "./carrito.css";

import {
  CarritoCompras,
  LimpiarVariables,
  ActualizarCarrito,
} from "../../Action/carrito";
import { ErrorToken } from "../../Action/auth.action";
import "./carrito.css";

export const CarroCompra = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { carrito, auth } = useSelector((state) => state);
  const { _carrito } = carrito;

  const socketContext = useContext(proyectSocket);
  const { socket } = socketContext;

  const [_producto, _setproducto] = useState(null);
  const [geTienda,setTienda] = useState(null);

  const { dateUser } = auth;
  const { idTienda, idUsuario } = dateUser[0].results[0];

  const totalCantida = !!_carrito && _carrito[0];

  // suma de precios del carrito de compras
  const [suma, setSuma] = useState(0)
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      dispatch(ErrorToken());
      history.push("/auth");
    }
  }, []);

  useEffect(() => {
    socket.on("enviar-codigo", (resp) => {
      if (resp.idTienda !== idTienda) {
        dispatch(ErrorToken());
        history.push("/auth");
      } else {
         setTienda(resp.idTienda);
        _setproducto(resp.result);
      }
    });
  }, [socket]);

  useEffect(() => {
    return () => {
      _setproducto(null);
      setTienda(null);
      dispatch(LimpiarVariables());
    };
  }, []);

  // validar el usaurio

  useEffect(() => {}, []);

  const Header = () => {
    return (
      <tr>
        <th>Numero Producto</th>
        <th>Nombre Producto</th>
        <th>Cantidad</th>
        <th>Total a Pagar</th>
      </tr>
    );
  };
  const Content = () => {
    const content = _carrito.map((valor, index) => {
      return (
        <tr key={index}>
          <td>{valor.idProducto}</td>
          <td>{valor.nombreProducto}</td>
          <td>{valor.cantidad}</td>
          <td>{valor.precioTotal}</td>
        </tr>
      );
    });
    return content;
  };
  const TablaDibujar = () => {
    return <Table Header={Header} Content={Content} />;
  };

  const GuardarProducto = () => {
    let txtcantidad = document.querySelector("#txtCantidad").value;

    const { NombreProducto, Precio, idProducto, Cantidad } = _producto[0];
    if (
      txtcantidad !== null &&
      txtcantidad !== undefined &&
      Number(txtcantidad) > 0
    ) {
      if (Cantidad !== 0) {
        if (txtcantidad < Cantidad) {
          let totalPrecio = Number(txtcantidad) * Precio;
          if (BuscarProductoExistente(idProducto)) {
            setSuma(totalPrecio+suma);
            EditarProducto(
              NombreProducto,
              idProducto,
              txtcantidad,
              totalPrecio
            );
          } else {
            setSuma(totalPrecio+suma);
            
            dispatch(
              CarritoCompras(
                NombreProducto,
                idProducto,
                txtcantidad,
                totalPrecio
              )
            );
          }
          document.querySelector("#txtCantidad").value = "";
        } else {
          alert("Cantidad Insuficiente");
        }
      } else {
        alert("Sin productos en el almacen");
      }
    } else {
      alert("Cantidad Requerida");
    }
  };

  const BuscarProductoExistente = (idProducto) => {
    let bandera = false;
    _carrito.map((valor) => {
      if (valor.idProducto === idProducto) {
        bandera = true;
      }
    });
    return bandera;
  };

  const EditarProducto = (
    NombreProducto,
    idProducto,
    cantidad,
    totalPrecio
  ) => {
    let data = {};
    _carrito.forEach((valor) => {
      if (valor.idProducto === idProducto) {
        data = {
          nombreProducto: NombreProducto,
          idProducto,
          cantidad: Number(cantidad) + Number(valor.cantidad),
          precioTotal: Number(totalPrecio) + Number(valor.precioTotal),
        };
      }
    });
    dispatch(ActualizarCarrito(data));
  };
  const PagarProducto=()=>{

  }

  return (
    <main>
      <div className="main__container">
        <div className="raya">
          <h3>Carrito de Compras</h3>
        </div>
        <div className="row">
          {_producto !== null ? (
            <MostrarProducto
              _producto={_producto}
              GuardarProducto={GuardarProducto}
            />
          ) : null}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card__estadisticas">
              {_carrito !== null &&
              _carrito !== undefined &&
              _carrito.length > 0 ? (
                TablaDibujar()
              ) : (
                <h1>Carrito Vacio</h1>
              )}
            </div>
          </div>
        </div>
        <div className="text-end mt-3">
          <input type="text" className="total__carrito" disabled value={suma}/>
          <button className="btn__Carrito" onClick={()=>PagarProducto()}>Pagar</button>
        </div>
      </div>
    </main>
  );
};
