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

// LOCAL STORAGE
export function loadPreferences() {
  try {
    const serialized = localStorage.getItem("preferences");
    if (!serialized) return undefined; // ❗ si no existe, usamos initialState del slice
    return JSON.parse(serialized);
  } catch (err) {
    console.error("Error loading preferences", err);
    return undefined;
  }
}

export function savePreferences(state) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("preferences", serialized);
  } catch (err) {
    console.error("Error saving preferences", err);
  }
}

export function dateFormater(date, showYear = false) {
  const dateutc = new Date(date);
  const dayName = dateutc.toLocaleDateString("es-MX", { weekday: "short" });
  const monthName = dateutc.toLocaleDateString("es-MX", { month: "short" });
  const year = dateutc.getFullYear();
  const day = dateutc.getDate();

  return `${dayName[0].toUpperCase()}${dayName.slice(
    1,
  )}, ${monthName[0].toUpperCase()}${monthName.slice(1)} ${day}  ${showYear ? `${year}` : ""}`;
}

// FOR DEVELOPING ONLY - REMOVE
export function dateUTC(date) {
  const dateUTC = date.toLocaleDateString("es-MX", {
    timeZone: "UTC",
  });
  return dateUTC;
}

export function timeFormater(schedule) {
  const date = new Date(schedule);
  const time = date.toLocaleTimeString("es-MX", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return time.toUpperCase().replace(/\./g, "");
}
