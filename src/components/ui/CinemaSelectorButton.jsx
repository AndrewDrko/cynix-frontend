import { BiCameraMovie } from "react-icons/bi";
import styles from "./CinemaSelectorButton.module.css";
import Button from "./Button";
import { MdArrowDropDown } from "react-icons/md";
import { useModal } from "../../contexts/ModalContext.jsx";
import TheaterSelector from "./TheaterSelector";

function CinemaSelectorButton({ type }) {
  const { openModal } = useModal();
  return (
    <Button
      type={type}
      className={styles.cinemaSelectorBtn}
      onClick={() => openModal(<TheaterSelector />)}
    >
      <div>
        <BiCameraMovie />
        <span>Seleccionar Cine</span>
      </div>
      <MdArrowDropDown />
    </Button>
  );
}

export default CinemaSelectorButton;
