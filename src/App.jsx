import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import Modal from "./components/ui/Modal";
import MoviesGrid from "./components/ui/MoviesGrid";
import ShowtimesPage from "./components/pages/showtimes/ShowtimesPage";
import MoviesPage from "./components/pages/movies/MoviesPage";
import ProfilePage from "./components/pages/profile/ProfilePage";
import TicketPage from "./components/pages/ticket/TicketPage";
import Signup from "./components/pages/Signup";
import Movie from "./components/pages/movies/Movie";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkSession } from "./utils";
import { useModal } from "./contexts/ModalContext";
import { AnimatePresence } from "framer-motion";
import PurchasePage from "./components/pages/purchaseShowtimes/PurchasePage";
import { ToastContainer } from "react-toastify";

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
        <Route path="/showtimes/:id/purchase" element={<PurchasePage />} />

        <Route path="/movies" element={<MoviesPage />}>
          <Route index element={<MoviesGrid />} />
          <Route path=":id" element={<Movie />} />
          <Route path=":id/showtimes" element={<ShowtimesPage />} />
        </Route>
        <Route path="/ticket/:id" element={<TicketPage />} />
      </Routes>
      {/* MODAL PLACEHOLDER */}
      <AnimatePresence>{showModal && <Modal>{content}</Modal>}</AnimatePresence>
      {/* TOAST PLACEHOLDER */}
      <ToastContainer className="toast-container" />
    </BrowserRouter>
  );
}

export default App;
