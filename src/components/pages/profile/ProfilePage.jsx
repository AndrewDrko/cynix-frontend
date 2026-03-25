import ProfileLayout from "../../layout/ProfileLayout";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  return (
    <div className={styles.profileContainer}>
      <ProfileLayout />
    </div>
  );
}

export default ProfilePage;
