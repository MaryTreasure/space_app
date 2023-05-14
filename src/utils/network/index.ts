import axios from 'axios';

export const networkInstance = axios.create({
  baseURL: 'https://api.nasa.gov',
  timeout: 10000,
});
