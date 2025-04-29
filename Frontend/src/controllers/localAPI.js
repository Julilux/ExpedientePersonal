import axios from "axios";

// Configuración base de Axios para conectar con el backend
const localAPI = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export default localAPI;