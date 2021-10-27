import React from 'react'

export const MostrarProducto = ({ _producto, GuardarProducto }) => {
  return (
    <>
      {_producto.map((valor) => (
        <div className="col-md-12">
          <div className="card mb-3" style={{ maxWidth: "auto" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={valor.Imagen}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title text-center titulo">
                    Informacion
                  </h5>
                  <p className="card-text subtitulo">
                    Nombre Producto: {valor.NombreProducto}
                  </p>
                  <p className="card-text subtitulo">
                    Cantidad Disponible: {valor.Cantidad}
                  </p>
                  <p className="card-text subtitulo">
                    Precio: {valor.Precio}
                  </p>
                  <div className="mb-3 row">
                    <label htmlFor="" className="col-sm-3 subtitulo">
                      Cantidad
                    </label>
                    <div className="col-sm-4 mt-3">
                      <input
                        type="number"
                        className="form-control"
                        id="txtCantidad"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <button
                    className="btn btn-outline-secondary w-75"
                    onClick={() => GuardarProducto()}
                  >
                    Adquirir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
