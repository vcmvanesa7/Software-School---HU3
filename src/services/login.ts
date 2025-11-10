import axios from "axios";

const API_URL = "https://webescuela-production.up.railway.app/api"; //API_URL de C#

export const loginUser = async (userName: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      userName,
      password,
    });

    const data = response.data;

    if (!data.token) {
      throw new Error("No se recibió el token de autorización");
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("userName", data.userName);
    localStorage.setItem("role", data.role);

    return data
  
  } catch (error: any) {
    const msg =
      error.response?.data?.message ||
      error.message ||
      "Error al iniciar sesión";
    throw new Error(msg);
  }
};


export const getUser = async () => {
  try {
    const token = localStorage.getItem("token");
    if(!token) throw new Error("No hay token, Inicia sesión primero");

    const response = await axios.get(`${API_URL}/User`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response.data

  } catch (error: any) {
      const msg =
      error.response?.data?.message ||
      error.message ||
      "Error al iniciar sesión";
    throw new Error(msg);
  }

}
