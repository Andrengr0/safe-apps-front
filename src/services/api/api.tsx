import axios from 'axios';

// Configuração básica do Axios
const api = axios.create({
  baseURL: 'https://testewebsite.shop/api', // Coloque aqui a URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
