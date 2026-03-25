import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import preferencesReducer from "./features/preferences/preferencesSlice";
import theatersReducer from "./features/theaters/theatersSlice";
import ticketsReducer from "./features/tickets/ticketSlice";
import { loadPreferences, savePreferences } from "./utils";

const preloadedState = {
  preferences: loadPreferences(),
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    preferences: preferencesReducer,
    theaters: theatersReducer,
    tickets: ticketsReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  savePreferences(state.preferences);
});

export default store;
