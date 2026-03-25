import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_CYNIX_API_URL;

// ESTADO INICIAL
const initialState = {
  user: null,
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  isAuthenticated: false,
};

// ACCIONES O REDUCER
export const loginUser = createAsyncThunk(
  "auth/loginUser", // nombre de la acción
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/user/login`,
        credentials,
        { withCredentials: true },
      );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data); // manejar error
    }
  },
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser", // nombre de la acción
  async (_, { rejectWithValue }) => {
    try {
      // Llamada al backend
      const res = await axios.post(
        `${API_URL}/api/v1/user/logout`,
        {},
        { withCredentials: true },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data); // manejar error
    }
  },
);

export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (registerData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${API_URL}/api/v1/user/signup`,
        registerData,
        { withCredentials: true },
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
  },

  extraReducers: (builder) => {
    builder
      // ... loginUser cases
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Error al iniciar sesión";
      })
      // ... logoutUser cases
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.status = "idle";
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload?.message || "Error al cerrar sesión";
      })
      // ... signupUser cases
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.isAuthenticated = true;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Error al registrar usuario";
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
