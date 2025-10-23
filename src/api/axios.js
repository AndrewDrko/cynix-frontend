import axios from "axios";

const API_URL = import.meta.env.VITE_CYNIX_API_URL;

const api = axios.create({
  baseURL: API_URL, // cambia a tu backend
  withCredentials: true, // envía cookies automáticamente
});

// const res = await api.get("/api/v1/user/me");
// console.log(res.data);

export default api;
