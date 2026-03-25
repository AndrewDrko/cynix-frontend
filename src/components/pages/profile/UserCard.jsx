import Anchor from "../../ui/Anchor";
import ProfileImage from "../../ui/ProfileImage";
import styles from "./UserCard.module.css";

function UserCard({ name, email, photo, onLogout, className }) {
  return (
    <div className={`${styles.profileCard} ${className}`}>
      <div className={styles.profileHeading}>
        <h1>Perfil del Usuario</h1>
        <Anchor ref="/" onClick={onLogout} className={styles.anchor}>
          Cerrar Sesión
        </Anchor>
        <p>Administra tu información personal y preferencias</p>
      </div>
      <div className={styles.profileHeader}>
        <ProfileImage image={photo} userName={name} />
        <div className={styles.headerInfo}>
          <h1>{name}</h1>
          <p>{email}</p>
        </div>
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

export default UserCard;
