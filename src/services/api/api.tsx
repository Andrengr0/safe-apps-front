import axios from 'axios';

// Configuração básica do Axios
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Coloque aqui a URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
