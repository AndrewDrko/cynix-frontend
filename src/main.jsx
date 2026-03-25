import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store.js";
import { ModalProvider } from "./contexts/ModalContext.jsx";
import { MoviesProvider } from "./contexts/MoviesContext.jsx";
import { ToastProvider } from "./contexts/ToastContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <MoviesProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </MoviesProvider>
      </ToastProvider>
    </Provider>
  </StrictMode>
);
