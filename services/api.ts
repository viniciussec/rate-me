import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
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