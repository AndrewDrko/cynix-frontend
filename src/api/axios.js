import axios from "axios";

const API_URL = import.meta.env.VITE_CYNIX_API_URL;

const api = axios.create({
  baseURL: API_URL, // cambia a tu backend
  withCredentials: true, // envía cookies automáticamente
});

export default api;
