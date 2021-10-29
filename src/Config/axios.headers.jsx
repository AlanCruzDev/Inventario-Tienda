import clienteAxios from './axios';
const TokenAuth =(token)=>{
  if(token){
    clienteAxios.defaults.headers.common['Authorization'] = token;
  }else{
    delete clienteAxios.defaults.headers.common['Authorization'];
  }
}
export default TokenAuth;