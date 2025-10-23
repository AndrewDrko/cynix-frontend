import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState(null);

  function openModal(element) {
    setShowModal(true);
    setContent(element);
  }

  function closeModal() {
    setShowModal(false);
    setContent(null);
  }

  return (
    <ModalContext.Provider
      value={{ openModal, closeModal, showModal, content }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

/* eslint-disable react-refresh/only-export-components */
export { ModalProvider, useModal };
