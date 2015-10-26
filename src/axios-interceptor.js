import axios from 'axios';
import config from './config';

axios.interceptors.request.use((axiosConfig) => {
  axiosConfig.headers.Authorization = `Bearer ${config.token}`;
  return axiosConfig;
});
