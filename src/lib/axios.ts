import axios from "axios";

const api = axios.create({
  baseURL: "http://172.28.96.1:8080/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token")
  if(token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
