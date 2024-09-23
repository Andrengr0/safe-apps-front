import axios from 'axios';

// Configuração básica do Axios
const api = axios.create({
  baseURL: 'https://api-safeapps.netlify.app/', // Coloque aqui a URL do seu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
