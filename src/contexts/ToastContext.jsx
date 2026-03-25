import { createContext, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomToast from "../components/ui/CustomToast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  function showCustomToast(message, action) {
    toast(<CustomToast message={message} action={action} />, {
      closeOnClick: false,
    });
  }

  function notifySuccess(message) {
    toast.success(message);
  }

  function notifyError(message) {
    toast.error(message);
  }

  function notifyInfo(message) {
    toast.info(message);
  }

  function notifyWarning(message) {
    toast.warning(message);
  }

  const value = {
    notifySuccess,
    notifyError,
    notifyInfo,
    notifyWarning,
    showCustomToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer className="toast-container" limit={1} />
    </ToastContext.Provider>
  );
}

/* eslint-disable react-refresh/only-export-components */
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast debe usarse dentro de <ToastProvider>");
  }
  return ctx;
}
