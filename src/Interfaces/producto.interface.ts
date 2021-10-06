export interface ProductoInterface{
  NombreProducto:string;
  Precio:number;
  CodigoSerie:string;
  Imagen:string;
  fkProveedor:number;
  fkCategoria:number;
  Cantidad:number;
  FechaLllegada: Date;
  fkTienda:number;
}
export interface ProductoActualizar{
  _NombreProducto:string;
  _Precio:number;
  _CodigoSerie:string;
  _Imagen:string;
  _fkProveedor:number;
  _fkCategoria:number;
  _Cantidad:number;
  _FechaLllegada: Date;
  _fkTienda:number;
}