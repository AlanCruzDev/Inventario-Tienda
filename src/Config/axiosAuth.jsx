import axios from 'axios';

const clienteAxiosAuth=axios.create({
  baseURL:'http://localhost:5002',
});
export default  clienteAxiosAuth;