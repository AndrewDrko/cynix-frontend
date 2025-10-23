// import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./components/pages/Homepage";
import Login from "./components/pages/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./features/auth/authSlice";
import api from "./api/axios";
import PageTransition from "./components/ui/PageTransition";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await api.get("api/v1/user/me", { withCredentials: true });
        console.log(res);
        dispatch(setUser(res.data.user));
      } catch (err) {
        console.log("No hay sesión activa", err);
      }
    };

    checkSession();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <PageTransition>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </PageTransition>
    </BrowserRouter>
  );
}

export default App;
