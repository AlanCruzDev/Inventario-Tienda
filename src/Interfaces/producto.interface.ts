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