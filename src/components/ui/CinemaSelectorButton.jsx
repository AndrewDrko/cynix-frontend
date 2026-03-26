import { BiCameraMovie } from "react-icons/bi";
import styles from "./CinemaSelectorButton.module.css";
import Button from "./Button";
import { MdArrowDropDown } from "react-icons/md";
import { useModal } from "../../contexts/ModalContext.jsx";
import TheaterSelector from "./TheaterSelector";
import { usePreferences } from "../../features/preferences/usePreferences.js";
import { useTheaters } from "../../features/theaters/useTheaters.js";

function CinemaSelectorButton({ type }) {
  const { selectedCinema } = usePreferences();
  const { theaters } = useTheaters();
  const { openModal } = useModal();

  const cinema = theaters.find((t) => t._id === selectedCinema);

  return (
    <Button
      type={type}
      className={styles.cinemaSelectorBtn}
      onClick={() => openModal(<TheaterSelector />)}
    >
      <div>
        <BiCameraMovie />
        {!selectedCinema && (
          <span className={styles.cinemaText}>Todos los cines</span>
        )}
        {selectedCinema && cinema && (
          <span className={styles.cinemaText}>{cinema.name}</span>
        )}
      </div>
      <MdArrowDropDown />
    </Button>
  );
}

export default CinemaSelectorButton;
