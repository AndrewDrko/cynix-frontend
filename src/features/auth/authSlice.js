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
      // Llamada al backend
      const res = await axios.post(
        `${API_URL}/api/v1/user/login`,
        credentials,
        { withCredentials: true }
      );
      return res.data; // { token, user }
    } catch (err) {
      return rejectWithValue(err.response.data); // manejar error
    }
  }
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
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload?.message || "Error al iniciar sesión";
      });
  },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
