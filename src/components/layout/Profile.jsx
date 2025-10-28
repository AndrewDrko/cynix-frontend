import { useDispatch, useSelector } from "react-redux";
import styles from "./Profile.module.css";
import { logoutUser } from "../../features/auth/authSlice";
import ProfileImage from "../ui/ProfileImage";
import Anchor from "../ui/Anchor";
import Spinner from "../ui/Spinner";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }
  console.log(user);

  if (!user) return <Spinner />;

  const { name, email, photo } = user;

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileHeader}>
        <ProfileImage image={photo} userName={name} />
        <div className={styles.headerInfo}>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
        <Anchor ref="/" onClick={handleLogout} className={styles.anchor}>
          Cerrar Sesión
        </Anchor>
      </div>
      <ul className={styles.profileInfo}>
        <li>
          <h1>Nombre</h1>
          <p>{name}</p>
        </li>
        <li>
          <h1>Email</h1>
          <p>{email}</p>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
