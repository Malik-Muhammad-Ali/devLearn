import axios from "axios";

const api = axios.create({
  baseURL: "https://devlearnbackend.up.railway.app/api",
});

export default api;
