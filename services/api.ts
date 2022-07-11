import axios, { AxiosRequestConfig } from 'axios';

const API = axios.create({
  baseURL: 'http://20.2.64.26:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use(
  async function (config : any) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default API;