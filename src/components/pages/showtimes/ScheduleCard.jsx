import { Button } from "@headlessui/react";
import styles from "./ScheduleCard.module.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import CustomToast from "../../ui/CustomToast";
import { timeFormater } from "../../../utils";
import { useToast } from "../../../contexts/ToastContext";

function ScheduleCard({
  id,
  schedule,
  typeScreen,
  language,
  subtitles,
  price,
}) {
  const { user } = useSelector((state) => state.auth);
  // const date = new Date(schedule);
  // const time = date.toLocaleTimeString("es-MX", {
  //   hour: "numeric",
  //   minute: "2-digit",
  //   hour12: true,
  // });

  const { showCustomToast } = useToast();

  const navigate = useNavigate();

  function handleClick() {
    const toastId = "login-required";

    if (!user) {
      if (!toast.isActive(toastId)) {
        showCustomToast(
          "Debe iniciar sesión primero para comprar boletos",
          () => navigate("/login")
        );
      }
      return;
    }

    navigate(`/showtimes/${id}/purchase`);
  }

  return (
    <div className={styles.card}>
      <h2>{timeFormater(schedule)}</h2>
      <div className={styles.info}>
        <span>{typeScreen}</span>
        <span>{language}</span>
        <span className={styles.price}>${price} MXN</span>
      </div>
      {subtitles && <span>Subtitulada</span>}
      <Button className={styles.cardButton} onClick={handleClick}>
        Comprar Boletos
      </Button>
    </div>
  );
}

export default ScheduleCard;
