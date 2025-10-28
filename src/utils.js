import api from "./api/axios";
import { setUser } from "./features/auth/authSlice";

export const checkSession = async (dispatch) => {
  try {
    const res = await api.get("api/v1/user/me", { withCredentials: true });
    dispatch(setUser(res.data.user));
  } catch (err) {
    // Solo manejar error 401 sin llenar la consola
    if (err.response && err.response.status === 401) {
      console.log("No hay sesión activa"); // opcional
    } else {
      console.error(err); // otros errores
    }
  }
};
