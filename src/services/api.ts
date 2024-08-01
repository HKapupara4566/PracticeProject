import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api-shield.rukkor.dev/api',
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjM3LCJkZXZpY2VfaWQiOiJGQkRCODlBQy05ODU2LTQzOUEtQUFGRi0wN0RENjcyNzREOEIiLCJpYXQiOjE3MjI0NTY1Mzd9.rZnndlZm39XyWePu1DGnHpuMUm1pN0U6QKn6t3Tjxi8',
  },
});

axiosInstance.interceptors.request.use(async config => {
  return config;
});

export default axiosInstance;
