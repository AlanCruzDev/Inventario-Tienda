import React, { useEffect, useContext, useState } from "react";
import proyectSocket from "../../context/socketContext";
import './carrito.css';

export const CarroCompra = () => {
  
  const socketContext = useContext(proyectSocket);
  const { socket, online } = socketContext;
  const [_producto, _setproducto] = useState(null);

  useEffect(() => {
    socket.on("enviar-codigo", (resp) => {
      _setproducto(resp);
    });
  }, [socket]);

  useEffect(() => {
    return () => {
      _setproducto(null);
    };
  }, []);

  const GuardarProducto=()=>{
    //console.log(_producto);
    
  }

  const segundaForma = () => {
    return (
      <>
        {_producto.map((valor) => (
            <div className="col-md-12">
              <div className="card mb-3" style={{maxWidth:'auto'}}>
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={valor.Imagen} className="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-center titulo">Informacion</h5>
                      <p className="card-text subtitulo">Nombre Producto:  {valor.NombreProducto}</p>
                      <p className="card-text subtitulo">Cantidad Disponible:  {valor.Cantidad}</p>
                      <p className="card-text subtitulo">Precio:  {valor.Precio}</p>
                      <div class="mb-3 row">
                          <label for="" class="col-sm-2 subtitulo">Cantidad</label>
                            <div class="col-sm-3 mt-3">
                              <input type="number" class="form-control" id="staticEmail"/>
                            </div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <button className="btn btn-outline-secondary w-75" onClick={()=> GuardarProducto()}>Adquirir</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </>
    );
  };

  return (
    <main>
      <div className="main__container">
        <div className="raya">
          <h3>Carrito de Compras</h3>
        </div>
        <div className="row">
          {_producto !== null ? (segundaForma()) : null}
        </div>
        <div className="row">
          <div className="col-md-12">
            <h1>hola</h1>

          </div>
        </div>
      </div>
    </main>
  );
};
