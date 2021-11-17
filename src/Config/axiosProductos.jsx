import axios from 'axios';

const clienteAxiosProductos=axios.create({
  baseURL:'http://localhost:5003',
});

export default clienteAxiosProductos;