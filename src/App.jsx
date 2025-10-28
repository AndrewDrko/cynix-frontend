import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Signup from "./components/pages/Signup";
import ProfilePage from "./components/pages/ProfilePage";
import { checkSession } from "./utils";
import MoviesPage from "./components/pages/MoviesPage";
import { useModal } from "./contexts/ModalContext";
import { AnimatePresence } from "framer-motion";
import Modal from "./components/ui/Modal";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { showModal, content } = useModal();

  useEffect(() => {
    if (!user) checkSession(dispatch);
  }, [dispatch, user]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/me" element={<ProfilePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
      {/* MODAL PLACEHOLDER */}
      <AnimatePresence>{showModal && <Modal>{content}</Modal>}</AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
