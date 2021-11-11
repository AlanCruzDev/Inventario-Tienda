export const querysLogeo ={
  busquedaUsuario:'select u.idUsuario,u.Nombre,u.contrasena,u.horAcceso, r.Admin,r.Empleado ,r.SuperAdmin,t.idTienda from Usuario u inner join Rol r on u.fkRol =r.idRol INNER JOIN Tienda t on u.fkTienda =t.idTienda where u.NombreUser = ? or u.idUsuario = ? and u.status = 1',
  todoUsuerios:'select u.idUsuario,u.Nombre,u.contrasena,u.horAcceso, r.Admin,r.Empleado ,r.SuperAdmin,t.idTienda from Usuario u inner join Rol r on u.fkRol =r.idRol INNER JOIN Tienda t on u.fkTienda =t.idTienda ',
  colorUsuario:'call GuardarColor(?,?,?)',
  ObtenercolorUsuario:'select c.ColorBarra,c.ColorFuente from Colores c where c.fkUser = ?'
}
export const queryEstado={
  obtenerEstados:'select e.idEstado ,e.NombreCiudad from Estado e '
}
export const queryCategoria={
  obtenerCategoria:'select c.idCategoria , c.NombreCategoria from Categoria c '
}
export const queryProveedor={
  obtenerProveedor:'select p.idProveedor , p.NombreProveedor from Proveedor p'
}
export const queryProductosTIenda={
  obtenerProductos:'select P.idProducto, P.NombreProducto, P.Precio, A.Cantidad , PR.NombreProveedor,CA.NombreCategoria FROM Tienda T INNER join Almacen A on T.idTienda = A.fkTienda INNER join Producto P on A.fkProducto = P.idProducto INNER JOIN Proveedor PR ON P.fkProveedor =PR.idProveedor INNER JOIN Categoria CA ON CA.idCategoria =P.fkCategoria WHERE (1=1) AND T.idTienda = ?',
  procedimientoActualizar:' call ActualizarProducto (?,?,?,?,?,?,?,?,?)',
  ObtenerProducto:'select P.idProducto, P.NombreProducto, P.Precio, A.Cantidad , PR.NombreProveedor,CA.NombreCategoria, P.CodigoSerie FROM Tienda T INNER join Almacen A on T.idTienda = A.fkTienda INNER join Producto P on A.fkProducto = P.idProducto INNER JOIN Proveedor PR ON P.fkProveedor =PR.idProveedor INNER JOIN Categoria CA ON CA.idCategoria =P.fkCategoria WHERE (1=1) AND P.idProducto = ?',
  ObtenerProductoCodigoTienda:'select P.idProducto,A.Cantidad ,P.Imagen ,P.NombreProducto ,P.Precio FROM Tienda T INNER join Almacen A on T.idTienda = A.fkTienda INNER join Producto P on A.fkProducto = P.idProducto	INNER JOIN Proveedor PR ON P.fkProveedor =PR.idProveedor INNER JOIN Categoria CA ON CA.idCategoria =P.fkCategoria WHERE (1=1) AND P.CodigoSerie = ? and T.idTienda = ?'
}
export const queryEmpleadoTienda={
  registroempleado:'call InsertarEmpleado(?,?,?,?,?,?,?)'
}
export const queryVentas={
  ventaRealizada:'call InsertarVenta(?,?,?,?,?,?)',
  ventasFinalizadas:'SELECT v.idVentas,v.MontoFinal,v.Cantidad ,p.NombreProducto,p.NombreProducto from Ventas v inner join Producto p ON v.fkProducto =p.idProducto inner join Usuario u ON v.fkCliente = u.idUsuario inner JOIN Tienda t ON u.fkTienda = u.fkTienda WHERE (1=1) and v.fechaVenta BETWEEN ? and ? and u.idUsuario = ? and t.idTienda = ?'
}