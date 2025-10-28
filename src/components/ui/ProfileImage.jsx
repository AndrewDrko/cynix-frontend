import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import Button from "./Button";
import styles from "./ProfileImage.module.css";

function ProfileImage({ image, userName }) {
  const API_URL = import.meta.env.VITE_CYNIX_API_URL;

  return (
    <div className={styles.profileImage}>
      <img src={`${API_URL}${image}`} alt={userName} />
      <Button shape="circle" className={styles.editBtn}>
        <PiPencilSimpleLineDuotone />
      </Button>
    </div>
  );
}

export default ProfileImage;
