import { useDispatch, useSelector } from "react-redux";
import styles from "./ProfileLayout.module.css";
import { logoutUser } from "../../features/auth/authSlice";
import Spinner from "../ui/Spinner";
import UserCard from "../pages/profile/UserCard";
import TicketsCard from "../pages/profile/TicketsCard";
import FavoriteCinemasCard from "../pages/profile/FavoriteCinemasCard";
import { useTicket } from "../../features/tickets/useTicket";
// import { useEffect, useState } from "react";

function ProfileLayout() {
  const { user } = useSelector((state) => state.auth);
  const { tickets } = useTicket();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  if (!user) return <Spinner />;

  const { name, email, photo } = user;

  return (
    <div className={styles.layout}>
      <UserCard
        className={`${styles.userCard} ${styles.card}`}
        name={name}
        email={email}
        photo={photo}
        onLogout={handleLogout}
      />
      <TicketsCard className={`${styles.card}`} tickets={tickets} />
      <FavoriteCinemasCard className={`${styles.card}`} />
    </div>
  );
}

export default ProfileLayout;
