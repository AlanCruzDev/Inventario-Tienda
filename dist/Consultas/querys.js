"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.querysLogeo = {
    busquedaUsuario: 'select u.idUsuario,u.Nombre,u.contraseña,u.horAcceso, r.Admin,r.Empleado ,r.SuperAdmin,t.idTienda from Usuario u inner join Rol r on u.fkRol =r.idRol INNER JOIN Tienda t on u.fkTienda =t.idTienda where u.NombreUser = ? or u.idUsuario = ? and u.status = 1'
};
exports.queryEstado = {
    obtenerEstados: 'select e.idEstado ,e.NombreCiudad from Estado e '
};
