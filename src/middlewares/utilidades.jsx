export const ChecaAcceso = (admin, empleado) => {
  var ruta = "";
  if (admin === 1) ruta = "/dash";
  if (empleado === 1) ruta = "/catalogoproductos";
  return ruta;
};
