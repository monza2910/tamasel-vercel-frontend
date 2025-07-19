import axios from 'axios';

const api = axios.create({
  baseURL: 'https://motorent-backend-sage.vercel.app/api',
  withCredentials: true, 
});

export default api;
