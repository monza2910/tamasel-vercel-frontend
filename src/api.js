import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3100/api',
  withCredentials: true, 
});

export default api;
