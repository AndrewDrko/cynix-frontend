import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = import.meta.env.VITE_CYNIX_API_URL;

const initialState = {
  theaters: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
};

export const fetchTheaters = createAsyncThunk(
  "theaters/fetchTheaters",
  async () => {
    const res = await fetch(`${API_URL}/api/v1/theater`);
    const data = await res.json();
    return data.data.theaters;
  }
);

const theatersSlice = createSlice({
  name: "theaters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTheaters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTheaters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.theaters = action.payload;
      })
      .addCase(fetchTheaters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default theatersSlice.reducer;
