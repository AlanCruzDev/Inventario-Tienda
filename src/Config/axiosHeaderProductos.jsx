import clienteAxiosProductos from './axiosProductos';

const TokenHeaderProducto =(token)=>{
  if(token){
    clienteAxiosProductos.defaults.headers.common['Authorization'] = token;
  }else{
    delete clienteAxiosProductos.defaults.headers.common['Authorization'];
  }
}
export default TokenHeaderProducto;