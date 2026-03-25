import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_CYNIX_API_URL;

const initialState = {
  tickets: [],
  status: "idle", // idle | loading | succeeded | failed
  error: null,
  loading: false,
};

export const fetchMyTickets = createAsyncThunk(
  "tickets/fetchMyTickets",
  async () => {
    const res = await fetch(`${API_URL}/api/v1/user/my-tickets`, {
      credentials: "include",
    });
    const data = await res.json();
    return data.data.tickets;
  },
);

export const createTicket = createAsyncThunk(
  "tickets/createTicket",
  async (ticketData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${API_URL}/api/v1/ticket`,
        ticketData,
        { withCredentials: true },
      );

      if (data.status === "success") return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Error al crear el ticket",
      );
    }
  },
);

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets.push(action.payload.data.ticket);
      })
      .addCase(createTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ========================
      // FETCH MY TICKETS
      // ========================
      .addCase(fetchMyTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMyTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(fetchMyTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ticketsSlice.reducer;
