"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryVentas = exports.queryEmpleadoTienda = exports.queryProductosTIenda = exports.queryProveedor = exports.queryCategoria = exports.queryEstado = exports.querysLogeo = void 0;
exports.querysLogeo = {
    busquedaUsuario: 'select u.idUsuario,u.Nombre,u.contrasena,u.horAcceso, r.Admin,r.Empleado ,r.SuperAdmin,t.idTienda from Usuario u inner join Rol r on u.fkRol =r.idRol INNER JOIN Tienda t on u.fkTienda =t.idTienda where u.NombreUser = ?  and u.status = 1',
    todoUsuerios: 'select u.idUsuario,u.Nombre,u.contrasena,u.horAcceso, r.Admin,r.Empleado ,r.SuperAdmin,t.idTienda from Usuario u inner join Rol r on u.fkRol =r.idRol INNER JOIN Tienda t on u.fkTienda =t.idTienda ',
    colorUsuario: 'call GuardarColor(?,?,?)',
    ObtenercolorUsuario: 'select c.ColorBarra,c.ColorFuente from Colores c where c.fkUser = ?'
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
    obtenerProductos: 'select P.idProducto, P.NombreProducto, P.Precio, A.Cantidad , PR.NombreProveedor,CA.NombreCategoria FROM Tienda T INNER join Almacen A on T.idTienda = A.fkTienda INNER join Producto P on A.fkProducto = P.idProducto INNER JOIN Proveedor PR ON P.fkProveedor =PR.idProveedor INNER JOIN Categoria CA ON CA.idCategoria =P.fkCategoria WHERE (1=1) AND T.idTienda = ?',
    procedimientoActualizar: ' call ActualizarProducto (?,?,?,?,?,?,?,?,?)',
    ObtenerProducto: 'select P.idProducto, P.NombreProducto, P.Precio, A.Cantidad , PR.NombreProveedor,CA.NombreCategoria, P.CodigoSerie FROM Tienda T INNER join Almacen A on T.idTienda = A.fkTienda INNER join Producto P on A.fkProducto = P.idProducto INNER JOIN Proveedor PR ON P.fkProveedor =PR.idProveedor INNER JOIN Categoria CA ON CA.idCategoria =P.fkCategoria WHERE (1=1) AND P.idProducto = ?',
    ObtenerProductoCodigoTienda: 'select P.idProducto,A.Cantidad ,P.Imagen ,P.NombreProducto ,P.Precio FROM Tienda T INNER join Almacen A on T.idTienda = A.fkTienda INNER join Producto P on A.fkProducto = P.idProducto	INNER JOIN Proveedor PR ON P.fkProveedor =PR.idProveedor INNER JOIN Categoria CA ON CA.idCategoria =P.fkCategoria WHERE (1=1) AND P.CodigoSerie = ? and T.idTienda = ?'
};
exports.queryEmpleadoTienda = {
    registroempleado: 'call InsertarEmpleado(?,?,?,?,?,?,?)',
    obtenerUsuarios: 'select u.idUsuario,concat(u.Nombre ,u.Paterno ,u.Materno ) as nombre,u.horAcceso,t.nombreTienda, u.status from Usuario u inner join Rol r on u.fkRol =r.idRol INNER JOIN Tienda t on u.fkTienda =t.idTienda where idTienda =  ? and r.Empleado  = 1',
    desactivarUsuario: 'update usuario set status =false where idUsuario = ? and fkTienda  = ?',
    activarUsuario: 'update usuario set status =true where idUsuario = ? and fkTienda  = ?',
    obtenerCorreo: 'select correo,t.nombreTienda from Usuario u inner join Rol r on u.fkRol =r.idRol INNER JOIN Tienda t on u.fkTienda =t.idTienda where idTienda =  ? and r.Admin  = 1'
};
exports.queryVentas = {
    ventaRealizada: 'call InsertarVenta(?,?,?,?,?,?)',
    ventasFinalizadas: 'SELECT v.idVentas,v.MontoFinal,v.Cantidad ,p.NombreProducto,p.NombreProducto from Ventas v inner join Producto p ON v.fkProducto =p.idProducto inner join Usuario u ON v.fkCliente = u.idUsuario inner JOIN Tienda t ON u.fkTienda = u.fkTienda WHERE (1=1) and v.fechaVenta BETWEEN ? and ? and u.idUsuario = ? and t.idTienda = ?'
};
