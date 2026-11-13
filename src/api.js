import axios from 'axios';

// Em produção, a API roda no mesmo servidor (/api). Em desenvolvimento, usa o JSON Server local.
const api = axios.create({
  baseURL: import.meta.env.PROD ? '/api' : 'http://localhost:3001'
});

export default api;
