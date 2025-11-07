import axios from "axios";
import { LoginProps } from "../types";

const API_URL = ""; //API_URL de C#

export const loginUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/users`);
    const data = response.data;
    
    if(!data.ok || !data.user){
        throw new Error(data.message || "Usuario o contraseña incorrectos");
    }

    return data.user;
  } catch (error: any) {
    const msg = 
    error.response?.data?.message || 
    error.message ||
    "Error al iniciar sesión";
    throw new Error(msg);
  }
};