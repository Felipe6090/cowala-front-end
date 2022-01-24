import axios from "axios";

const api = axios.create({
  baseURL: "https://ip-fast.com/api/ip",
});

export default api;

// colocar o link da api em um arquivo .env é o correto a se fazer