import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCinema: null,
  favoriteCinemas: [],
};

const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    selectCinema: (state, action) => {
      if (action.payload === state.selectedCinema) {
        state.selectedCinema = null;
      } else {
        state.selectedCinema = action.payload;
      }
    },
    toggleFavorite: (state, action) => {
      const id = action.payload;
      const exists = state.favoriteCinemas.includes(id);

      state.favoriteCinemas = exists
        ? state.favoriteCinemas.filter((c) => c !== id)
        : [...state.favoriteCinemas, id];
    },
  },
});

export const { selectCinema, toggleFavorite } = preferencesSlice.actions;
export default preferencesSlice.reducer;
