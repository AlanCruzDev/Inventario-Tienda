"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querysLogeo = {
    busquedaUsuario: 'select u.idUsuario,u.Nombre,u.contraseña,u.horAcceso, r.Admin,r.Empleado ,r.SuperAdmin,t.idTienda from Usuario u inner join Rol r on u.fkRol =r.idRol INNER JOIN Tienda t on u.fkTienda =t.idTienda where u.NombreUser = ? or u.idUsuario = ? and u.status = 1'
};
exports.queryEstado = {
    obtenerEstados: 'select e.idEstado ,e.NombreCiudad from Estado e '
};
exports.queryCategoria = {
    obtenerCategoria: 'select c.idCategoria , c.NombreCategoria from Categoria c '
};
exports.queryProveedor = {
    obtenerProveedor: 'select p.idProveedor , p.NombreProveedor from Proveedor p'
};
exports.queryProductosTIenda = {
    obtenerProductos: 'select P.idProducto, P.NombreProducto, P.Precio, A.Cantidad , PR.NombreProveedor,CA.NombreCategoria FROM Tienda T INNER join Almacen A on T.idTienda = A.fkTienda INNER join Producto P on A.fkProducto = P.idProducto INNER JOIN Proveedor PR ON P.fkProveedor =PR.idProveedor INNER JOIN Categoria CA ON CA.idCategoria =P.fkCategoria WHERE (1=1) AND T.idTienda = ?'
};
