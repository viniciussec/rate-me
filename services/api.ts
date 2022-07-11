import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
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